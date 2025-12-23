import { sizeStore } from '@/store/Size/size.store'
import style from '../../EntityAdmin.module.css'

function ChildrenSize() {

    const {activeEntity} = sizeStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity?.name}/>
        </div>
    )
}

export default ChildrenSize