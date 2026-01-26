'use client'

import { IPromotionDetails } from '@/types/models/PromotionDetails.model'
import style from '../Selected.module.css'
import { promotionStore } from '@/store/Promotion/promotion.store'
import SelectedPrice from '../components/SelectedPrice/SelectedPrice'

interface SelectedPromotionProps{
    promotionDetails : IPromotionDetails[]
}


function SelectedPromotion({promotionDetails} : SelectedPromotionProps) {

    const {activeEntity} = promotionStore()

    const details = promotionDetails.find(detail => activeEntity?.id === detail.promotion.id)

    const price = details?.price ?? 0
    
    if (!activeEntity) return <div>Selecciona una promoción</div>

    return (
        <div className={style.containerPrincipal}>
            <div className={style.containerInformation}>

                <div className={style.information}>
                    <p className={style.title}>{activeEntity?.name}</p>
                    <p className={style.description}>{activeEntity?.description}</p>
                    <p>Detalles</p>
                    {details?.unitaryDetails.map(d => 
                    <div key={d.id} className={style.infoPromotion}>
                        <p>{d.quantity}</p>
                        <p>{d.productDetails.product.name} {d.productDetails.size.name}</p>
                        
                    </div>)}
                </div>

                
                <div className={style.image}>
                    <SelectedPrice image={activeEntity.image?.url ?? ''} price={price} name={activeEntity.name}/>
                </div>

            </div>
        </div>
    )
}

export default SelectedPromotion