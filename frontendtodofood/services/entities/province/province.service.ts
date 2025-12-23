import { IProvince, IRequestProvince } from "@/types/models/Province.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

export const BASE_PROVINCE = `${process.env.NEXT_PUBLIC_BASE_URL}/province`


export const getAllProvinces = () : Promise<IProvince[]> => {
    return getAll<IProvince>(BASE_PROVINCE)
}

export const getProvinceById = (id: number) : Promise<IProvince> => {
    return getById<IProvince>(BASE_PROVINCE, id)
}

export const createProvince = async(data : IRequestProvince) : Promise<IProvince> =>{
    return post<IProvince, IRequestProvince>(BASE_PROVINCE, data)
}

export const updatedProvince = async(data : IRequestProvince, id: number) : Promise<IProvince> => {
    return put<IProvince, IRequestProvince>(BASE_PROVINCE, data, id)
}

export const deleteProvince = async(id : number) : Promise<void> => {
    return deleted(BASE_PROVINCE, id)
}