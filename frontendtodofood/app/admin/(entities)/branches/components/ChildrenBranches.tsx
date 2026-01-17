import { IAddress } from '@/types/models/Address.model'
import style from '../../EntityAdmin.module.css'
import { branchStore } from '@/store/Branch/branch.store'

interface ChildrenBranchesProps{
    addresses : IAddress[]
}

function ChildrenBranches({addresses} : ChildrenBranchesProps) {

    const {activeEntity} = branchStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name"  defaultValue={activeEntity?.name} required={true}/>
            <label>Número</label>
            <input type="text" name="number" defaultValue={activeEntity?.number} required={true}/>
            <label>Dirección</label>
            <select name="address" defaultValue={activeEntity?.address.id}>
                {addresses.map((address) => (
                    <option key={address.id} value={address.id}>{address.street} {address.number} ({address.locality.name})</option>
                ))}
            </select>
        </div>
    )
}

export default ChildrenBranches