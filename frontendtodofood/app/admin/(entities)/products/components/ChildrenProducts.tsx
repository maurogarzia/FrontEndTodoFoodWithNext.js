import { ICategory } from '@/types/models/Category.model'
import style from '../../EntityAdmin.module.css'
import { IImage } from '@/types/models/Image.model'
import { productStore } from '@/store/Product/product.store'

interface ChildrenProductsProps{
    categories: ICategory[],
    images: IImage[]
}

function ChildrenProducts({categories, images} : ChildrenProductsProps) {

    const {activeEntity} = productStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity?.name} required={true}/>

            <label>Categoria</label>
            <select name="category" defaultValue={activeEntity?.category?.id!}>
                {categories.map((category) => (
                    <option key={category.id} value={category.id!}>{category.name}</option>
                ))}
            </select>

            <label>Imagen Id</label>
            <select name="image" defaultValue={activeEntity?.image.id}>
                {images.map((image) => (
                    <option key={image.id} value={image.id}>{image.id}</option>
                ))}
            </select>

            <label>Descripcion</label>
            <textarea name="description" defaultValue={activeEntity?.description} required={true}></textarea>
        </div>
    )
}

export default ChildrenProducts