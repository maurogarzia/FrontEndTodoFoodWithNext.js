import style from '../Children.module.css'

function ChildrenChangePassword() {
  return (
    <div className={style.containerData}>
      <label>Anterior contraseña</label>
      <input type="text" name='oldPassword' required={true}/>
      <label>Nueva contraseña</label>
      <input type="text" name="newPassword" required={true}/>
      <label>Confirmar Contraseña</label>
      <input type="text" name="confirmPassword" required={true}/>
    </div>
  )
}

export default ChildrenChangePassword