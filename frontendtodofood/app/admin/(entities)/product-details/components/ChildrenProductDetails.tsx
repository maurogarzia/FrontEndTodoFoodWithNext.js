import { ISize } from '@/types/models/Size.model'
import style from '../../EntityAdmin.module.css'
import { IProducts } from '@/types/models/Product.model'
import { productDetailsStore } from '@/store/ProductDetails/productDetails.store'

interface ChildrenProductDetailsProps{
    sizes: ISize[],
    products: IProducts[]
}

function ChildrenProductDetails({sizes, products} : ChildrenProductDetailsProps) {

    const {activeEntity} = productDetailsStore()

    return (
        <div className={style.containerData}>
            <label>Stock</label>
            <input type="text" name="stock" defaultValue={activeEntity?.stock} required={true}/>

            <label>Precio</label>
            <input type="text" name="price" defaultValue={activeEntity?.price} required={true}/>

            <label>Tamaño</label>
            <select name="size" defaultValue={activeEntity?.size.id ?? 0}>
                {sizes.map((size) => (
                    <option key={size.id} value={size.id!}>{size.name}</option>
                ))}
            </select>

            <label>Producto</label>
            <select name="product" defaultValue={activeEntity?.product.id}>
                {products.map((product) => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                ))}
            </select>
        </div>
    )
}

export default ChildrenProductDetails