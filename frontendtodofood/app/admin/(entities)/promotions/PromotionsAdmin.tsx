"use client"

import { IPromotion, IRequestPromotion } from '@/types/models/Promotions.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { IImage } from '@/types/models/Image.model'
import { promotionStore } from '@/store/Promotion/promotion.store'
import { modalStore } from '@/store/Modal/modal.store'
import { useRouter } from 'next/navigation'
import ChildrenPromotion from './components/ChildrenPromotion'
import { createPromotion, deletePromotion, updatePromotion } from '@/services/entities/promotion/promotion.service'
import Modal from '@/components/Modal/Modal'

interface PromotionsAdminProps {
    promotions: IPromotion[],
    images: IImage[]
}

function PromotionsAdmin({promotions, images} : PromotionsAdminProps) {

    const {activeEntity, setActiveEntity} = promotionStore()
    const {view, setView} = modalStore()
    const router = useRouter()

    const columnPromotions : TableColumn<IPromotion>[] = [
        {header: "Id", accessor: 'id'},
        {header: "Nombre", accessor: 'name'},
        {header: "Fecha Inicio", accessor: 'initDate'},
        {header: "Fecha Final", accessor: 'finallyDate'},
        {header: "Descripción", accessor: 'description'},
        {header: "Id Imágen", render: (promotion) => promotion.image.id},
        {header: "Acciones", render: (promotion) => 
            <Buttons row={promotion} 
            onEdit={(selectedPromotion) => {
                setView(true)
                setActiveEntity(selectedPromotion)
            }} 
            onDelete={async(selectedPromotion) => {
                await deletePromotion(selectedPromotion.id)
                router.refresh()
            }}/>
        },
        
    ]

    const handleSubmit = async(formData: FormData) => {
        const promotion : IRequestPromotion = {
            id: activeEntity ? activeEntity.id : null,
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            initDate: new Date (formData.get("initDate") as string),
            finallyDate: new Date (formData.get('finallyDate') as string),
            image: {
                id: Number(formData.get('image'))
            }
        }

        if (activeEntity) {
            await updatePromotion(promotion, promotion.id!)
            router.refresh()
        } else {
            await createPromotion(promotion)
            router.refresh()
        }
    }

    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    const children = <ChildrenPromotion images={images}/>

    return (
        <div className={style.containerPrincipal}>

            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Promoción' : 'Crear Promoción'}
                        children={children}
                        setActiveEntity={setActiveEntity}
                        onSubmit={handleSubmit}
                    />
                </div>
            }

            <TitleAndButton title='PROMOCIONES' titleOfButton='Agregar promoción' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={promotions} columns={columnPromotions}/>
            </div>
        </div>
    )
}

export default PromotionsAdmin