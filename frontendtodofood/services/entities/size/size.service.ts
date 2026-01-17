import { ISize } from "../../../types/models/Size.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "../../../urls/FetchEntities"

export const getAllSizes= () : Promise<ISize[]> => {
    return getAll<ISize>(FetchEntities.BASE_SIZES)
}

export const getSizeById = (id: number) : Promise<ISize> => {
    return getById<ISize>(FetchEntities.BASE_SIZES, id)
}

export const createSize = async(data : ISize) : Promise<ISize> =>{
    return post<ISize, ISize>(FetchEntities.BASE_SIZES, data)
}

export const updatedSize = async(data : ISize, id: number) : Promise<ISize> => {
    return put<ISize, ISize>(FetchEntities.BASE_SIZES, data, id)
}

export const deleteSize = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_SIZES, id)
}