"use client"

import { IRequestUnitaryDetails, IUnitaryDetails } from '@/types/models/UnitaryDetails.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { IProductsDetails } from '@/types/models/ProductDetail.model'
import { modalStore } from '@/store/Modal/modal.store'
import { unitaryDetailsStore } from '@/store/UnitaryDetails/unitaryDetails.store'
import { useRouter } from 'next/navigation'
import { createUnitaryDetail, deleteUnitaryDetail, updatedUnitaryDetail } from '@/services/entities/unitaryDetails/unitaryDetails.service'
import ChildrenUnitDetails from './components/ChildrenUnitDetails'
import Modal from '@/components/Modal/Modal'

interface UnitDetailsAdminProps{
    unitDetails: IUnitaryDetails[],
    productDetails: IProductsDetails[]
}

function UnitDetailsAdmin({unitDetails, productDetails} : UnitDetailsAdminProps) {

    const {setView, view} = modalStore()
    const {setActiveEntity, activeEntity} = unitaryDetailsStore()
    const router = useRouter()

    const columnUnitDetails : TableColumn<IUnitaryDetails>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Cantidad', accessor: 'quantity'},
        {header: 'Producto', render: (detail) => detail.productDetails.product.name},
        {header: 'Id detalle producto', render: (detail) => detail.productDetails.id},
        {header: 'Acciones', render: (detail) => 
            <Buttons row={detail} 
            onEdit={(selectedDetail) => {
                setView(true)
                setActiveEntity(selectedDetail)
            }} 
            onDelete={async(selectedDetail) => {
                await deleteUnitaryDetail(selectedDetail.id)
                router.refresh()
            }}/>
        }
    ]

    const handleSubmit = async(formData : FormData) => {
        const unitDetail : IRequestUnitaryDetails = {
            id : activeEntity ? activeEntity.id : null,
            quantity: Number(formData.get("quantity")),
            productDetails: {
                id: Number(formData.get("productDetail"))
            }
        }

        if (activeEntity) {
            await updatedUnitaryDetail(unitDetail, unitDetail.id!)
            router.refresh()
        } else {
            await createUnitaryDetail(unitDetail)
            router.refresh()
        }
    }

    const children = <ChildrenUnitDetails productDetails={productDetails}/>

    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    return (
        <div className={style.containerPrincipal}>

            {view &&
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Detalle Unitario' : 'Crear Detalle Unitario'}
                        onSubmit={handleSubmit}
                        setActiveEntity={setActiveEntity}
                    >
                        {children}
                    </Modal>
                </div>
            }

            <TitleAndButton title='DETALLES UNITARIOS' titleOfButton='Agregar detalle' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={unitDetails} columns={columnUnitDetails}/>
            </div>
        </div>
    )
}

export default UnitDetailsAdmin