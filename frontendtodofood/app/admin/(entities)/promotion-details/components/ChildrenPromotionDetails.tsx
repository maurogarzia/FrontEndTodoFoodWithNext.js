import { IPromotion } from '../../../../../types/models/Promotions.model'
import style from '../../EntityAdmin.module.css'
import { IUnitaryDetails } from '../../../../../types/models/UnitaryDetails.model'
import { promotionDetailsStore } from '../../../../../store/PromotionDetails/promotionDetails.store'

interface ChildrenPromotionDetailsProps{
    promotions : IPromotion[],
    unitaryDetails: IUnitaryDetails[]
}

function ChildrenPromotionDetails({promotions, unitaryDetails} : ChildrenPromotionDetailsProps) {

    const {activeEntity} = promotionDetailsStore()

    const isChecked = (detailId: number) => {
        return activeEntity?.unitaryDetails?.some(d => d.id === detailId) ?? false
    }


    return (
        <div className={style.containerData}>
            <label>Descuento</label>
            <input type="text" name='discount' defaultValue={activeEntity?.discount} required={true}/>

            <label>Precio</label>
            <input type="text" name="price" defaultValue={activeEntity?.price} required={true}/>

            <label>Promoción</label>
            <select name="promotion" defaultValue={activeEntity?.promotion.id}>
                {promotions.map((promotion) => (
                    <option key={promotion.id} value={promotion.id}>{promotion.name}</option>
                ))}
            </select>

            <label>Detalles Unitarios</label>
            <div className={style.containerDetails}>
                {unitaryDetails.map((detail) => (
                    <label key={detail.id} className={style.unitDetails}>
                        <input
                            type="checkbox"
                            name="unitaryDetails"
                            value={detail.id}
                            defaultChecked={isChecked(detail.id)}
                        />
                        {`${detail.quantity} ${detail.productDetails.product.name} ${detail.productDetails.size.name}`}
                    </label>
                ))}
            </div>
            

        </div>
    )
}

export default ChildrenPromotionDetails