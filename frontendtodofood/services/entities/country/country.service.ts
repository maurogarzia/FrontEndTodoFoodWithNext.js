import { ICountry } from "../../../types/models/Country,model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "../../../urls/FetchEntities"

export const getAllCountries = () : Promise<ICountry[]> => {
    return getAll<ICountry>(FetchEntities.BASE_COUNTRY)
}

export const getCountryById = (id: number) : Promise<ICountry> => {
    return getById<ICountry>(FetchEntities.BASE_COUNTRY, id)
}

export const createCountry = async(data : ICountry) : Promise<ICountry> =>{
    return post<ICountry, ICountry>(FetchEntities.BASE_COUNTRY, data)
}

export const updatedCountry = async(data : ICountry, id: number) : Promise<ICountry> => {
    return put<ICountry, ICountry>(FetchEntities.BASE_COUNTRY, data, id)
}

export const deleteCountry = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_COUNTRY, id)
}