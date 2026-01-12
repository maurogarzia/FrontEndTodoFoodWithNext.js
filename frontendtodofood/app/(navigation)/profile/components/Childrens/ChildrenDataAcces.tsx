import { userStore } from '@/store/User/user.store'
import style from '../Children.module.css'

function ChildrenDataAcces() {

  const {activeEntity} = userStore()

  return (
    <div className={style.containerData}>
      <label>Email</label>
      <input type="text" name='email' defaultValue={activeEntity?.email} required={true}/>
      <label>Nombre de usuario</label>
      <input type="text" name="username" defaultValue={activeEntity?.username} required={true}/>
    </div>
  )
}

export default ChildrenDataAcces