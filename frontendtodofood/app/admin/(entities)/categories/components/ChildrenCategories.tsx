import { categoryStore } from '@/store/Category/category.store'
import style from '../../EntityAdmin.module.css'

function ChildrenCategories() {

    const {activeEntity} = categoryStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity?.name} />
        </div>
    )
}

export default ChildrenCategories