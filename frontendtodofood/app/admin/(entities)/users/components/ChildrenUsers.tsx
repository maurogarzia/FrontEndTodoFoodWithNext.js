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
            <input type="text" name="name" defaultValue={activeEntity?.name}/>
            <label>Apellido</label>
            <input type="text" name="lastname" defaultValue={activeEntity?.lastname} />
            <label>Nombre usuario</label>
            <input type="text" name="username" defaultValue={activeEntity?.username}/>
            <label>Email</label>
            <input type="text" name="email" defaultValue={activeEntity?.email} />
            <label>Teléfono</label>
            <input type="text" name="phone" defaultValue={activeEntity?.phone || ''}/>
            <label>Rol</label>
            <select name="" id="role">
                <option key={Role.admin} value={Role.admin}>{Role.admin}</option>
                <option key={Role.user} value={Role.user}>{Role.user}</option>
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