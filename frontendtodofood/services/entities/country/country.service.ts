import { ICountry } from "@/types/models/Country,model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_COUNTRY = `${process.env.NEXT_PUBLIC_BASE_URL}/countries`

export const getAllCountries = () => {
    return getAll(BASE_COUNTRY)
}

export const getCountryById = (id: number) => {
    return getById(BASE_COUNTRY, id)
}

export const createCountry = async(data : ICountry) =>{
    return post(BASE_COUNTRY, data)
}

export const updatedCountry = async(data : ICountry, id: number) => {
    return put(BASE_COUNTRY, data, id)
}

export const deleteCountry = async(id : number) => {
    return deleted(BASE_COUNTRY, id)
}