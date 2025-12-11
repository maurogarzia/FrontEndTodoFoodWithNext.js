import { ISize } from "@/types/models/Size.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_SIZE = `${process.env.NEXT_PUBLIC_BASE_URL}/size`


export const getAllSizes= () : Promise<ISize[]> => {
    return getAll<ISize>(BASE_SIZE )
}

export const getSizeById = (id: number) : Promise<ISize> => {
    return getById<ISize>(BASE_SIZE, id)
}

export const createSize = async(data : ISize) : Promise<ISize> =>{
    return post<ISize, ISize>(BASE_SIZE, data)
}

export const updatedSize = async(data : ISize, id: number) : Promise<ISize> => {
    return put<ISize, ISize>(BASE_SIZE, data, id)
}

export const deleteSize = async(id : number) : Promise<void> => {
    return deleted(BASE_SIZE, id)
}