import { ILocality } from '@/types/models/Locality.model'
import style from '../../EntityAdmin.module.css'
import { addressStore } from '@/store/Address/address.store'

interface ChildrenAddressProps{
    localities: ILocality[]
}

function ChildrenAddress({localities} : ChildrenAddressProps) {

    const {activeEntity} = addressStore()

    return (
        <div className={style.containerData}>
            <label htmlFor="">Calle</label>
            <input type="text" name="street" defaultValue={activeEntity?.street}/>
            <label htmlFor="">Número</label>
            <input type="text" name="number" defaultValue={activeEntity?.number} />
            <label htmlFor="">Localidad</label>
            <select name="locality" defaultValue={activeEntity?.locality.id}>
                {localities.map((locality) => (
                    <option key={locality.id} value={locality.id}>{locality.name}</option>
                ))}
            </select>
        </div>
    )
}

export default ChildrenAddress