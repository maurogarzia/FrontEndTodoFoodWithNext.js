"use client"

import { IPromotionDetails } from '@/types/models/PromotionDetails.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface PromotionDetailsAdminProps{
    promotionDetails: IPromotionDetails[]
}

function PromotionDetailsAdmin({promotionDetails} : PromotionDetailsAdminProps) {


    const columnPromotionDetails : TableColumn<IPromotionDetails>[] = [
        {header: "id" , accessor: 'id'},
        {header: "Promocion" , render: (detail) => detail.promotion.name},
        {header: "Descuento" , accessor: 'discount'},
        {header: "Precio" , accessor: 'price'},
        {header: "Ids detalles unitarios" , render: (detail) => detail.unitaryDetails.map((u) => `${u.id} `)},
        {header: "Acciones" , render: (detail) => 
            <Buttons row={detail} onEdit={(selectedDetail)=> {}} onDelete={(id) => {}}/>
        },
    ]

    return (
        <div className={style.containerPrincipal}>
            <TitleAndButton title='DETALLE DE PROMOCIONES' titleOfButton='Agregar detalles'/>

            <div className={style.table}>
                <TableAdmin data={promotionDetails} columns={columnPromotionDetails}/>
            </div>
        </div>
    )
}

export default PromotionDetailsAdmin