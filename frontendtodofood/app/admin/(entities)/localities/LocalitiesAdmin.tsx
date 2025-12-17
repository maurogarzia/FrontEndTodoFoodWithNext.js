"use client"

import { ILocality } from '@/types/models/Locality.model'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import style from '../EntityAdmin.module.css'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface LocalitiesAdminProps{
    localities: ILocality[]
}

function LocalitiesAdmin({localities} : LocalitiesAdminProps) {

    const columnLocality : TableColumn<ILocality>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Nombre', accessor: 'name'},
        {header: 'Provincia', render: (localitiy) => localitiy.province.name},
        {header: 'Código postal', accessor: 'cp'},
        {header: 'Acciones', render: (locality) => 
            <Buttons row={locality} onEdit={(selectedLocality) => {}} onDelete={(id) => {}}/>
        }
    ]

    return (
        <div className={style.containerPrincipal}>

            <TitleAndButton title='LOCALIDADES' titleOfButton='Agregar localidades'/>

            <div className={style.table}>
                <TableAdmin data={localities} columns={columnLocality}/>
            </div>
        </div>
    )
}

export default LocalitiesAdmin