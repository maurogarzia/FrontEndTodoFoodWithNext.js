import { IRequestLocality } from "@/types/models/Locality.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_LOCALITY = `${process.env.NEXT_PUBLIC_BASE_URL}/locality`


export const getAllLocalities = () => {
    return getAll(BASE_LOCALITY)
}

export const getLocalityById = (id: number) => {
    return getById(BASE_LOCALITY, id)
}

export const createLocality = async(data : IRequestLocality) =>{
    return post(BASE_LOCALITY, data)
}

export const updatedLocality = async(data : IRequestLocality, id: number) => {
    return put(BASE_LOCALITY, data, id)
}

export const deleteLocality = async(id : number) => {
    return deleted(BASE_LOCALITY, id)
}