"use client"

import { IUnitaryDetails } from '@/types/models/UnitaryDetails.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface UnitDetailsAdminProps{
    unitDetails: IUnitaryDetails[]
}

function UnitDetailsAdmin({unitDetails} : UnitDetailsAdminProps) {

    const columnUnitDetails : TableColumn<IUnitaryDetails>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Cantidad', accessor: 'quantity'},
        {header: 'Producto', render: (detail) => detail.productDetails.product.name},
        {header: 'Id detalle producto', render: (detail) => detail.productDetails.id},
        {header: 'Acciones', render: (detail) => 
            <Buttons row={detail} onEdit={(selectedDetail) => {}} onDelete={(id) => {}}/>
        }
    ]

    return (
        <div className={style.containerPrincipal}>

            <TitleAndButton title='DETALLES UNITARIOS' titleOfButton='Agregar detalle'/>

            <div className={style.table}>
                <TableAdmin data={unitDetails} columns={columnUnitDetails}/>
            </div>
        </div>
    )
}

export default UnitDetailsAdmin