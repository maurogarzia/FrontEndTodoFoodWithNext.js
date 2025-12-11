import { ILocality, IRequestLocality } from "@/types/models/Locality.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_LOCALITY = `${process.env.NEXT_PUBLIC_BASE_URL}/locality`


export const getAllLocalities = () : Promise<ILocality[]> => {
    return getAll<ILocality>(BASE_LOCALITY)
}

export const getLocalityById = (id: number) : Promise<ILocality> => {
    return getById<ILocality>(BASE_LOCALITY, id)
}

export const createLocality = async(data : IRequestLocality) : Promise<ILocality> =>{
    return post<ILocality, IRequestLocality>(BASE_LOCALITY, data)
}

export const updatedLocality = async(data : IRequestLocality, id: number) : Promise<ILocality> => {
    return put<ILocality, IRequestLocality>(BASE_LOCALITY, data, id)
}

export const deleteLocality = async(id : number) : Promise<void> => {
    return deleted(BASE_LOCALITY, id)
}