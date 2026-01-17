import style from '../../EntityAdmin.module.css'


function ChildrenRegister() {
    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" required={true}/>

            <label>Apellido</label>
            <input type="text" name="lastname" required={true}/>

            <label>Nombre de usuario</label>
            <input type="text" name="username" required={true}/>

            <label>Email</label>
            <input type="text" name="email" required={true}/>

            <label>Contraseña</label>

            <input type="text" name="password" required={true}/>
        </div>
    )
}

export default ChildrenRegister