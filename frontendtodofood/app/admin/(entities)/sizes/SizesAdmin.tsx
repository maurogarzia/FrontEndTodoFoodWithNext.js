"use client"

import { ISize } from "../../../../types/models/Size.model"
import TableAdmin, { TableColumn } from "../../components/TableAdmin/TableAdmin"
import style from '../EntityAdmin.module.css'
import TitleAndButton from "../../components/TitleAndButton/TitleAndButton"
import Buttons from "../../components/Buttons/Buttons"
import { useRouter } from "next/navigation"
import { modalStore } from "../../../../store/Modal/modal.store"
import { sizeStore } from "../../../../store/Size/size.store"
import { createSize, deleteSize, updatedSize } from "../../../../services/entities/size/size.service"
import ChildrenSize from "./components/ChildrenSize"
import Modal from "../../../../components/Modal/Modal"

interface SizesAdminProps{
    sizes: ISize[]
}

function SizesAdmin({sizes} : SizesAdminProps) {

    const {view, setView} = modalStore()
    const {activeEntity, setActiveEntity} = sizeStore()
    const router = useRouter()


    const sizesColumns : TableColumn<ISize>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre" , accessor: 'name'},
        {header: "Acciones", 
            render: (size) => (
                <Buttons row={size}
                onEdit={(selectedSize) => {
                    setActiveEntity(selectedSize)
                    setView(true)
                }}
                onDelete={async(selectedSize) => {
                    await deleteSize(selectedSize.id!)
                    router.refresh()
                }}/>
            )
        }
    ]

    const handleSubmit = async(formData: FormData) => {
        const size : ISize = {
            id: activeEntity ? activeEntity.id : null,
            name: formData.get('name') as string
        }

        if (activeEntity) {
            await updatedSize(size, size.id!)
            router.refresh()
        } else {
            await createSize(size)
            router.refresh()
        }
    }

    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    const children = <ChildrenSize/>

    return (
        <div className={style.containerPrincipal}>

            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Tamaño' : "Crear Tamaño"}
                        children={children}
                        setActiveEntity={setActiveEntity}
                        onSubmit={handleSubmit}
                    />
                </div>
            }

            <TitleAndButton title="TAMAÑOS" titleOfButton="Agregar tamaños" onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={sizes} columns={sizesColumns}/>
            </div>
        </div>
    ) 

}

export default SizesAdmin