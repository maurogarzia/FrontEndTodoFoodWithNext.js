import { IProvince } from '@/types/models/Province.model'
import style from '../../EntityAdmin.module.css'
import { localityStore } from '@/store/Locality/locality.store'

interface ChildrenLocalityProps{
    provinces: IProvince[]
}

function ChildrenLocality({provinces}: ChildrenLocalityProps) {

    const {activeEntity} = localityStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity?.name} required={true}/>
            <label htmlFor="">Código postal</label>
            <input type="text" name="cp" defaultValue={activeEntity?.cp} required={true}/>
            <label >Provincia</label>
            <select name="province" defaultValue={activeEntity?.province.id}>
                {provinces.map((province) => (
                    <option key={province.id} value={province.id}>{province.name}</option>
                ))}
            </select>
        </div>
    )
}

export default ChildrenLocality