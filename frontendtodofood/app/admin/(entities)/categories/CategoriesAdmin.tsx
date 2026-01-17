"use client"

import { ICategory } from "../../../../types/models/Category.model"
import style from '../EntityAdmin.module.css'
import TitleAndButton from "../../components/TitleAndButton/TitleAndButton"
import TableAdmin, { TableColumn } from "../../components/TableAdmin/TableAdmin"
import Buttons from "../../components/Buttons/Buttons"
import ChildrenCategories from "./components/ChildrenCategories"
import { useRouter } from "next/navigation"
import { categoryStore } from "../../../../store/Category/category.store"
import { modalStore } from "../../../../store/Modal/modal.store"
import Modal from "../../../../components/Modal/Modal"
import { createCategory, deleteCategory, updatedCategory } from "../../../../services/entities/category/category.service"

interface CategoriesAdminProps{
    categories: ICategory[]
}

function CategoriesAdmin({categories} : CategoriesAdminProps) {

    const {setActiveEntity, activeEntity} = categoryStore()
    const {setView, view} = modalStore()
    const router = useRouter()

    const columnCategories : TableColumn<ICategory>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Nombre', accessor: "name"},
        {header: "Acciones", render: (category) => 
            <Buttons row={category}
            onEdit={(selectedCategory) => {
                setView(true)
                setActiveEntity(selectedCategory)
            }}
            onDelete={async(selectedCategory) => {
                await deleteCategory(selectedCategory.id!)
                router.refresh()
            }}/>
        }
    ]

    const handleSubmit = async(formData : FormData) => {
        const category : ICategory = {
            id: activeEntity ? activeEntity.id : null,
            name : formData.get("name") as string
        }

        if (activeEntity){
            await updatedCategory(category, category.id!)
            router.refresh()
        }else{
            await createCategory(category)
            router.refresh()
        }   
    }

    const onCreate = () => {
        setActiveEntity(null)
        setView(true)
    }

    const children = <ChildrenCategories/>
    

    return (
        <div className={style.containerPrincipal}>

        {view && 
            <div className={style.modalBackdrop}>
                <Modal
                    title={activeEntity ? 'Editar Categoría' : 'Crear Categoría'}
                    setActiveEntity={setActiveEntity}
                    children={children}
                    onSubmit={handleSubmit}
                />
            </div>
        
        }

            <TitleAndButton title="CATEGORÍAS" titleOfButton="Agregar categoría" onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={categories} columns={columnCategories}/>
            </div>
        </div>
    )
}

export default CategoriesAdmin