'use client'

import { userStore } from '@/store/User/user.store'
import style from '../Children.module.css'

function ChildrenData() {

    const {activeEntity} = userStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity?.name}/>

            <label>Apellido</label>
            <input type="text" name="lastname" defaultValue={activeEntity?.lastname}/>

            <label>Teléfono</label>
            <input type="number" name="phone" defaultValue={activeEntity?.phone}/>
        </div>
    )
}

export default ChildrenData