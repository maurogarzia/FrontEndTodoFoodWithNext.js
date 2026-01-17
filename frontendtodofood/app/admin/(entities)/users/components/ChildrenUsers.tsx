import { IAddress } from '@/types/models/Address.model'
import style from '../../EntityAdmin.module.css'
import { userStore } from '@/store/User/user.store'
import { Role } from '@/types/enums/Rol'

interface ChildrenUsersProps{
    addresses: IAddress[]
}


function ChildrenUsers({addresses} : ChildrenUsersProps) {

    const {activeEntity} = userStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity?.name} required={true}/>

            <label>Apellido</label>
            <input type="text" name="lastname" defaultValue={activeEntity?.lastname} required={true}/>

            <label>Nombre usuario</label>
            <input type="text" name="username" defaultValue={activeEntity?.username} required={true}/>

            <label>Email</label>
            <input type="text" name="email" defaultValue={activeEntity?.email} required={true}/>

            <label>Teléfono</label>
            <input type="text" name="phone" defaultValue={activeEntity?.phone || ''} required={true}/>

            <label>Rol</label>
            <select name="role" defaultValue={activeEntity?.role}>
                <option key={Role.admin} value='ADMIN'>{Role.admin}</option>
                <option key={Role.user} value='CUSTOMER'>{Role.user}</option>
            </select>

            <label>Dirección</label>
            <select name="address" defaultValue={activeEntity?.address?.id ?? ''}>
                {addresses.map((address) => (
                    <option key={address.id} value={address.id}>{address.street} {address.number} ({address.locality.name})</option>
                ))}
            </select>
            
        </div>
    )
}

export default ChildrenUsers