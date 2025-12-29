import style from '../Children.module.css'

function ChildrenChangePassword() {
  return (
    <div className={style.containerData}>
      <label>Anterior contraseña</label>
      <input type="text" name='oldPassword'/>
      <label>Nueva contraseña</label>
      <input type="text" name="newPassword"/>
      <label>Confirmar Contraseña</label>
      <input type="text" name="confirmPassword" />
    </div>
  )
}

export default ChildrenChangePassword