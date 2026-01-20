"use client"

import { IPromotionDetails, IRequestPromotionDetails } from '@/types/models/PromotionDetails.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { IUnitaryDetails } from '@/types/models/UnitaryDetails.model'
import { IPromotion } from '@/types/models/Promotions.model'
import { promotionDetailsStore } from '@/store/PromotionDetails/promotionDetails.store'
import { modalStore } from '@/store/Modal/modal.store'
import { useRouter } from 'next/navigation'
import ChildrenPromotionDetails from './components/ChildrenPromotionDetails'
import { createPromotionDetails, deletePromotionDetails, updatedPromotionDetails } from '@/services/entities/promotionDetails/promotionDetails.service'
import Modal from '@/components/Modal/Modal'


interface PromotionDetailsAdminProps{
    promotionDetails: IPromotionDetails[],
    unitaryDetails: IUnitaryDetails[],
    promotions: IPromotion[]
}

function PromotionDetailsAdmin({promotionDetails, promotions, unitaryDetails} : PromotionDetailsAdminProps) {

    const {activeEntity, setActiveEntity} = promotionDetailsStore()
    const {setView, view} = modalStore()
    const router = useRouter()


    const columnPromotionDetails : TableColumn<IPromotionDetails>[] = [
        {header: "id" , accessor: 'id'},
        {header: "Promocion" , render: (detail) => detail.promotion.name},
        {header: "Descuento" , accessor: 'discount'},
        {header: "Precio" , accessor: 'price'},
        {header: "Ids detalles unitarios" , render: (detail) => detail.unitaryDetails.map((u) => `${u.id} `)},
        {header: "Acciones" , render: (detail) => 
            <Buttons row={detail} 
            onEdit={(selectedDetail)=> {
                setView(true)
                setActiveEntity(selectedDetail)
            }} 
            onDelete={async (selectedDetail) => {
                await deletePromotionDetails(selectedDetail.id)
                router.refresh()
            }}/>
        },
    ]

    const handleSubmit = async(formData : FormData) => {

        const unitaryDetailsIds = formData
            .getAll('unitaryDetails')
            .map(id => Number(id))

        const promotionDetails : IRequestPromotionDetails = {
            id: activeEntity ? activeEntity.id : null,
            discount: Number(formData.get('discount')),
            price: Number(formData.get('price')),
            promotion: {
                id: Number(formData.get('promotion'))
            },
            unitaryDetails: unitaryDetailsIds.map(id => ({id}))
        }

        if (activeEntity) {
            await updatedPromotionDetails(promotionDetails, promotionDetails.id!)
            router.refresh()
        } else {
            await createPromotionDetails(promotionDetails)
            router.refresh()
        }
    }


    const onCreate = () => {
        setActiveEntity(null)
        setView(true)
    }

    const children = <ChildrenPromotionDetails promotions={promotions} unitaryDetails={unitaryDetails} />

    return (
        <div className={style.containerPrincipal}>


            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Detalle de Promoción' : 'Crear Detalle de Promoción'}
                        setActiveEntity={setActiveEntity}
                        onSubmit={handleSubmit}
                    >
                        {children}
                    </Modal>
                </div>
            }

            <TitleAndButton title='DETALLE DE PROMOCIONES' titleOfButton='Agregar detalles' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={promotionDetails} columns={columnPromotionDetails}/>
            </div>
        </div>
    )
}

export default PromotionDetailsAdmin