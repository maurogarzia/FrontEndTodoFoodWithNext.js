import { countryStore } from '../../../../../store/Country/country.store'
import style from '../../EntityAdmin.module.css'


function ChildrenCountry() {

    const {activeEntity} = countryStore()

    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name='name' defaultValue={activeEntity ? activeEntity.name : ''} required={true}/>
        </div>
    )
}

export default ChildrenCountry