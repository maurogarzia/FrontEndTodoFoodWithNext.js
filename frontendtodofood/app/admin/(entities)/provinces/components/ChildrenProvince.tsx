"use client"


import { provinceStore } from '@/store/Province/province.store'
import style from '../../EntityAdmin.module.css'
import { ICountry } from '@/types/models/Country,model'


interface ChildrenProvinceProps {
    countries: ICountry[]
}

function ChildrenProvince({countries} : ChildrenProvinceProps) {

    const {activeEntity} = provinceStore()
    
    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity ? activeEntity.name : ''} required={true}/>
            <label>País</label>
            <select name="country" defaultValue={activeEntity ? activeEntity.country.name : ''}>
                {countries?.map((country) => (
                    <option key={country.id} value={country.id!}>{country.name}</option>
                ))}
            </select>
        </div>  
    )
}

export default ChildrenProvince