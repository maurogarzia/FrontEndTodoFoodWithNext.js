import { IRequestProvince } from "@/types/models/Province.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PROVINCE = `${process.env.NEXT_PUBLIC_BASE_URL}/province`


export const getAllProvinces = () => {
    return getAll(BASE_PROVINCE)
}

export const getProvinceById = (id: number) => {
    return getById(BASE_PROVINCE, id)
}

export const createProvince = async(data : IRequestProvince) =>{
    return post(BASE_PROVINCE, data)
}

export const updatedProvince = async(data : IRequestProvince, id: number) => {
    return put(BASE_PROVINCE, data, id)
}

export const deleteProvince = async(id : number) => {
    return deleted(BASE_PROVINCE, id)
}