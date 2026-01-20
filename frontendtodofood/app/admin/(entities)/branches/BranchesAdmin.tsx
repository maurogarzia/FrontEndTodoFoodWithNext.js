"use client"

import { IBranch, IRequestBranch } from '@/types/models/Branch.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { IAddress } from '@/types/models/Address.model'
import { modalStore } from '@/store/Modal/modal.store'
import { branchStore } from '@/store/Branch/branch.store'
import ChildrenBranches from './components/ChildrenBranches'
import { useRouter } from 'next/navigation'
import { createBranches, deleteBranch, updatedBranch } from '@/services/entities/branche/branche.service'
import Modal from '@/components/Modal/Modal'

interface BranchesAdminProps {
    branches : IBranch[],
    addresses: IAddress[]
}

function BranchesAdmin({branches, addresses} : BranchesAdminProps) {

    const {setView, view} = modalStore()
    const {setActiveEntity, activeEntity} = branchStore()
    const router = useRouter()

    const columnsBranch : TableColumn<IBranch>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre", accessor: 'name'},
        {header: "Dirección", render: (branch) => `${branch.address.street} ${branch.address.number} (${branch.address.locality.name})`},
        {header: "Acciones", render: (branch) => 
            <Buttons row={branch}
            onEdit={(selectedBranch) => {
                setActiveEntity(selectedBranch)
                setView(true)
            }} 
            onDelete={async(selectedBranch) => {
                await deleteBranch(selectedBranch.id!)
                router.refresh()
            }}/>
        }
    ]

    const handleSubmit = async(formData : FormData) => {
        const branch : IRequestBranch = {
            id: activeEntity?.id || null,
            name : formData.get("name") as string,
            number: Number(formData.get("number")),
            address : {
                id: Number(formData.get("address"))
            }
        }

        if (activeEntity) {
            await updatedBranch(branch, branch.id!)
            router.refresh()
        } else {
            await createBranches(branch)
            router.refresh()
        }
    }

    const onCreate = () => {
        setActiveEntity(null)
        setView(true)
    }

    const children = <ChildrenBranches addresses={addresses}/>

    return (
        <div className={style.containerPrincipal}>

            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Sucursal' : 'Crear Sucursal'}
                        setActiveEntity={setActiveEntity}
                        onSubmit={handleSubmit}
                    >
                        {children}
                    </Modal>
                </div>
            }

            <TitleAndButton title='SUCURSALES' titleOfButton='Agregar sucursales' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={branches} columns={columnsBranch}/>
            </div>
        </div>
    )
}

export default BranchesAdmin