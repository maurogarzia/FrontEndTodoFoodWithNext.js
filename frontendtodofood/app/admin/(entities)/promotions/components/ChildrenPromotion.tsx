import { promotionStore } from '../../../../../store/Promotion/promotion.store'
import style from '../../EntityAdmin.module.css'
import { IImage } from '../../../../../types/models/Image.model'

interface ChildrenPromotionProps{
    images : IImage[]
}

function ChildrenPromotion({images} : ChildrenPromotionProps) {

    const {activeEntity} = promotionStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity?.name} required={true}/>

            <label>Fecha Inicio</label>
            <input type="date" name="initDate" defaultValue={String(activeEntity?.initDate)} required={true}/>

            <label>Fecha Fin</label>
            <input type="date" name="finallyDate" defaultValue={String(activeEntity?.finallyDate)} required={true}/>

            <label>Descripción</label>
            <input type="text" name="description" defaultValue={activeEntity?.description} required={true}/>

            <label>Id imágen</label>
            <select name="image" defaultValue={activeEntity?.image.id}>
                {images.map((image) => (
                    <option key={image.id} value={image.id}>{image.id}</option>
                ))}
            </select>

        </div>
    )
}

export default ChildrenPromotion