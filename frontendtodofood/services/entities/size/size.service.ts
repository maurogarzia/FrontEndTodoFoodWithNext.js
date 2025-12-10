import { ISize } from "@/types/models/Size.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_SIZE = `${process.env.NEXT_PUBLIC_BASE_URL}/size`


export const getAllSizes= () => {
    return getAll(BASE_SIZE )
}

export const getSizeById = (id: number) => {
    return getById(BASE_SIZE, id)
}

export const createSize = async(data : ISize) =>{
    return post(BASE_SIZE, data)
}

export const updatedSize = async(data : ISize, id: number) => {
    return put(BASE_SIZE, data, id)
}

export const deleteSize = async(id : number) => {
    return deleted(BASE_SIZE, id)
}