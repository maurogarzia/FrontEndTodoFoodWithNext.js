"use client"

import { ILocality, IRequestLocality } from '@/types/models/Locality.model'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import style from '../EntityAdmin.module.css'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { modalStore } from '@/store/Modal/modal.store'
import { localityStore } from '@/store/Locality/locality.store'
import { createLocality, deleteLocality, updatedLocality } from '@/services/entities/locality/locatlity.service'
import { IProvince } from '@/types/models/Province.model'
import { useRouter } from 'next/navigation'
import Modal from '@/components/Modal/Modal'
import ChildrenLocality from './components/ChildrenLocalities'


interface LocalitiesAdminProps{
    localities: ILocality[],
    provinces: IProvince[]
}

function LocalitiesAdmin({localities, provinces} : LocalitiesAdminProps) {

    const {setView, view} = modalStore()
    const {setActiveEntity, activeEntity} = localityStore()
    const router = useRouter()

    const columnLocality : TableColumn<ILocality>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Nombre', accessor: 'name'},
        {header: 'Provincia', render: (localitiy) => localitiy.province.name},
        {header: 'Código postal', accessor: 'cp'},
        {header: 'Acciones', render: (locality) => 
            <Buttons row={locality} 
            onEdit={(selectedLocality) => {
                setActiveEntity(selectedLocality)
                setView(true)
            }} 
            onDelete={async(selectedLocality) => {
                await deleteLocality(selectedLocality.id)
                router.refresh()
            }}/>
        }
    ]

    const handleSubmit = async(formData : FormData) => {
        
            const locality: IRequestLocality = {
                id: activeEntity ?  Number(formData.get('id')) as number : null,
                name: formData.get("name") as string,
                cp: Number(formData.get("cp") as string),
                province: {
                    id: Number(formData.get("province"))
                }
            }
        
            if (activeEntity) {
        
                await updatedLocality(locality, activeEntity.id!)
                router.refresh()
            } else {
                await createLocality(locality)
                router.refresh()
            }
            setView(false)
        }

    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    const children = <ChildrenLocality provinces={provinces}/>

    return (
        <div className={style.containerPrincipal}>

            {view && 
                <div className={style.modalBackdrop}>
                    <Modal 
                    title={activeEntity ? 'Editar Localidad' : 'Crear Localidad'}
                    onSubmit={handleSubmit}
                    setActiveEntity={setActiveEntity}
                    >
                        {children}
                    </Modal>
                </div>
            }

            <TitleAndButton title='LOCALIDADES' titleOfButton='Agregar localidades' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={localities} columns={columnLocality}/>
            </div>
        </div>
    )
}

export default LocalitiesAdmin