import { IProductsDetails } from '@/types/models/ProductDetail.model'
import style from '../../EntityAdmin.module.css'
import { unitaryDetailsStore } from '@/store/UnitaryDetails/unitaryDetails.store'

interface ChildrenUnitDetailsProps{
    productDetails: IProductsDetails[]
}

function ChildrenUnitDetails({productDetails} : ChildrenUnitDetailsProps) {

    const {activeEntity} = unitaryDetailsStore()

    return (
        <div className={style.containerData}>
            <label>Cantidad</label>
            <input type="text" name="quantity" defaultValue={activeEntity?.quantity} />
            <label>Detalle Producto</label>
            <select name="productDetail" defaultValue={activeEntity?.productDetails.id}>
                {productDetails.map((detail) => (
                    <option key={detail.id} value={detail.id}>{detail.product.name} {detail.size.name}</option>
                ))}
            </select>
        </div>
    )
}

export default ChildrenUnitDetails