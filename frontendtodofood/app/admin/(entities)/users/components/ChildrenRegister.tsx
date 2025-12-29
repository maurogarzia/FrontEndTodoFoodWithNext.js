import { Role } from '@/types/enums/Rol'
import style from '../../EntityAdmin.module.css'


function ChildrenRegister() {
    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" id="" />

            <label>Apellido</label>
            <input type="text" name="lastname" id="" />

            <label>Nombre de usuario</label>
            <input type="text" name="username" id="" />

            <label>Email</label>
            <input type="text" name="email" />

            <label>Contraseña</label>

            <input type="text" name="password" />
        </div>
    )
}

export default ChildrenRegister