"use client"

import { ISize } from "@/types/models/Size.model"
import TableAdmin, { TableColumn } from "../../components/TableAdmin/TableAdmin"
import style from '../EntityAdmin.module.css'
import TitleAndButton from "../../components/TitleAndButton/TitleAndButton"
import Buttons from "../../components/Buttons/Buttons"

interface SizesAdminProps{
    sizes: ISize[]
}

function SizesAdmin({sizes} : SizesAdminProps) {

    const sizesColumns : TableColumn<ISize>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre" , accessor: 'name'},
        {header: "Acciones", 
            render: (size) => (
                <Buttons row={size} onEdit={() => {}} onDelete={(id) => {}}/>
            )
        }
    ]

    return (
        <div className={style.containerPrincipal}>
            <TitleAndButton title="TAMAÑOS" titleOfButton="Agregar tamaños"/>

            <div className={style.table}>
                <TableAdmin data={sizes} columns={sizesColumns}/>
            </div>
        </div>
    ) 

}

export default SizesAdmin