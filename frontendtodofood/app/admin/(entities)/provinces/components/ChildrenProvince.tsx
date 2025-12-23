"use client"


import { provinceStore } from '@/store/Province/province.store'
import style from '../../EntityAdmin.module.css'
import { ICountry } from '@/types/models/Country,model'
import { useEffect, useState } from 'react'
import { FetchEntities } from '@/urls/FetchEntities'

function ChildrenProvince() {

    const {activeEntity} = provinceStore()
    const [countries, setCountries] = useState<ICountry[]>()
    
    useEffect(() => {
        const fetchedCountries = async() => {
            fetch(FetchEntities.BASE_PROVINCE,{
                method: 'GET',
                credentials: 'include'
            }).then((res) => {
                if (!res.ok) throw Error('No autorizado')
                return res.json()
            })
            .then((data) => setCountries(data))
            .catch((error) => {throw new Error(error)})
            
        }
        fetchedCountries()
    },[])
    
    return (
        <div className={style.containerData}>
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={activeEntity ? activeEntity.name : ''}/>
            <label>País</label>
            <select name="country" defaultValue={activeEntity ? activeEntity.country.name : ''}>
                {countries?.map((country) => (
                    <option key={country.id}>{country.name}</option>
                ))}
            </select>
        </div>  
    )
}

export default ChildrenProvince