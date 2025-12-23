"use client"

import { ILocality, IRequestLocality } from '@/types/models/Locality.model'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import style from '../EntityAdmin.module.css'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { modalStore } from '@/store/Modal/modal.store'
import { localityStore } from '@/store/Locality/locality.store'
import { createLocality, updatedLocality } from '@/services/entities/locality/locatlity.service'

interface LocalitiesAdminProps{
    localities: ILocality[]
}

function LocalitiesAdmin({localities} : LocalitiesAdminProps) {

    const {setView} = modalStore()
    const {setActiveEntity, activeEntity} = localityStore()

    const columnLocality : TableColumn<ILocality>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Nombre', accessor: 'name'},
        {header: 'Provincia', render: (localitiy) => localitiy.province.name},
        {header: 'Código postal', accessor: 'cp'},
        {header: 'Acciones', render: (locality) => 
            <Buttons row={locality} onEdit={(selectedLocality) => {}} onDelete={(id) => {}}/>
        }
    ]

    const handleSubmit = async(formData : FormData) => {
        
            const locality: IRequestLocality = {
                id: activeEntity ?  Number(formData.get('id')) as number : null,
                name: formData.get("name") as string,
                cp: Number(formData.get("cp") as string),
                province: {
                    id: activeEntity?.province.id || null
                }
            }
        
            if (activeEntity) {
        
                await updatedLocality(locality, activeEntity.id!)
            } else {
                await createLocality(locality)
            }
            setView(false)
        }

    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    return (
        <div className={style.containerPrincipal}>

            <TitleAndButton title='LOCALIDADES' titleOfButton='Agregar localidades' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={localities} columns={columnLocality}/>
            </div>
        </div>
    )
}

export default LocalitiesAdmin