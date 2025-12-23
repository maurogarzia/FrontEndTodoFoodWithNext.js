import { ILocality, IRequestLocality } from "@/types/models/Locality.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "@/urls/FetchEntities"

export const getAllLocalities = () : Promise<ILocality[]> => {
    return getAll<ILocality>(FetchEntities.BASE_LOCALITY)
}

export const getLocalityById = (id: number) : Promise<ILocality> => {
    return getById<ILocality>(FetchEntities.BASE_LOCALITY, id)
}

export const createLocality = async(data : IRequestLocality) : Promise<ILocality> =>{
    return post<ILocality, IRequestLocality>(FetchEntities.BASE_LOCALITY, data)
}

export const updatedLocality = async(data : IRequestLocality, id: number) : Promise<ILocality> => {
    return put<ILocality, IRequestLocality>(FetchEntities.BASE_LOCALITY, data, id)
}

export const deleteLocality = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_LOCALITY, id)
}