import { userStore } from '@/store/User/user.store'
import style from '../Children.module.css'
import { ILocality } from '@/types/models/Locality.model'

interface childrenAddressProps{
  localities: ILocality[]
}

function ChildrenAddress({localities} : childrenAddressProps) {

  const {activeEntity} = userStore()

  return (
    <div className={style.containerData}>
      {activeEntity?.address.id === null ? 
        <p>No hay direccion agregada</p>
        : 
        <div className={style.containerAddress}>
          <p className={style.address}>{activeEntity?.address.street} {activeEntity?.address.number} ({activeEntity?.address.locality.name})</p>

          <label>Calle</label>
          <input type="text" name="street" />

          <label>Número</label>
          <input type="text" name="number"  />

          <label htmlFor="">Localidad</label>
          <select name="locality">
            {localities.map((locality) => (
              <option key={locality.id} value={locality.id}>{locality.name}</option>
            ))}
          </select>
        </div>
      }
    </div>
  )
}

export default ChildrenAddress