"use client"

import { ICategory } from "@/types/models/Category.model"
import style from '../EntityAdmin.module.css'
import TitleAndButton from "../../components/TitleAndButton/TitleAndButton"
import TableAdmin, { TableColumn } from "../../components/TableAdmin/TableAdmin"
import Buttons from "../../components/Buttons/Buttons"

interface CategoriesAdminProps{
    categories: ICategory[]
}

function CategoriesAdmin({categories} : CategoriesAdminProps) {

    const columnCategories : TableColumn<ICategory>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Nombre', accessor: "name"},
        {header: "Acciones", render: (category) => 
            <Buttons row={category} onEdit={(selectedCategory) => {}} onDelete={(id) => {}}/>
        }
    ]

    return (
        <div className={style.containerPrincipal}>

            <TitleAndButton title="CATEGORÍAS" titleOfButton="Agregar categoría"/>

            <div className={style.table}>
                <TableAdmin data={categories} columns={columnCategories}/>
            </div>
        </div>
    )
}

export default CategoriesAdmin