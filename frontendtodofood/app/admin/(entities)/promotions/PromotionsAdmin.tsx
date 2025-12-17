"use client"

import { IPromotion } from '@/types/models/Promotions.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface PromotionsAdminProps {
    promotions: IPromotion[]
}

function PromotionsAdmin({promotions} : PromotionsAdminProps) {

    const columnPromotions : TableColumn<IPromotion>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre", accessor: 'name'},
        {header: "Fecha Inicio", accessor: 'initDate'},
        {header: "Fecha Final", accessor: 'finallyDate'},
        {header: "Descripción", accessor: 'description'},
        {header: "Id Imágen", render: (promotion) => promotion.image.id},
        {header: "Acciones", render: (promotion) => 
            <Buttons row={promotion} onEdit={(selectedPromotion) => {}} onDelete={(id) => {}}/>
        },
        

    ]

    return (
        <div className={style.containerPrincipal}>

            <TitleAndButton title='PROMOCIONES' titleOfButton='Agregar promoción'/>

            <div className={style.table}>
                <TableAdmin data={promotions} columns={columnPromotions}/>
            </div>
        </div>
    )
}

export default PromotionsAdmin