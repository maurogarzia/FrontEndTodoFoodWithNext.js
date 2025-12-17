"use client"

import { IBranch } from '@/types/models/Branch.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface BranchesAdminProps {
    branches : IBranch[]
}

function BranchesAdmin({branches} : BranchesAdminProps) {

    const columnsBranch : TableColumn<IBranch>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre", accessor: 'name'},
        {header: "Dirección", render: (branch) => `${branch.address.street} ${branch.address.number} (${branch.address.locality.name})`},
        {header: "Acciones", render: (branch) => 
            <Buttons row={branch} onEdit={(selectedBranch) => {}} onDelete={(id) => {}}/>
        }
    ]

    return (
        <div className={style.containerPrincipal}>
            <TitleAndButton title='SUCURSALES' titleOfButton='Agregar sucursales'/>

            <div className={style.table}>
                <TableAdmin data={branches} columns={columnsBranch}/>
            </div>
        </div>
    )
}

export default BranchesAdmin