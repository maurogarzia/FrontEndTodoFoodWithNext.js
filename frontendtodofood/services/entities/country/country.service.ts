import { ICountry } from "@/types/models/Country,model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_COUNTRY = `${process.env.NEXT_PUBLIC_BASE_URL}/country`

export const getAllCountries = () : Promise<ICountry[]> => {
    return getAll<ICountry>(BASE_COUNTRY)
}

export const getCountryById = (id: number) : Promise<ICountry> => {
    return getById<ICountry>(BASE_COUNTRY, id)
}

export const createCountry = async(data : ICountry) : Promise<ICountry> =>{
    return post<ICountry, ICountry>(BASE_COUNTRY, data)
}

export const updatedCountry = async(data : ICountry, id: number) : Promise<ICountry> => {
    return put<ICountry, ICountry>(BASE_COUNTRY, data, id)
}

export const deleteCountry = async(id : number) : Promise<void> => {
    return deleted(BASE_COUNTRY, id)
}