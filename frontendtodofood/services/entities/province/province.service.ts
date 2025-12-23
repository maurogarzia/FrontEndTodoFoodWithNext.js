import { IProvince, IRequestProvince } from "@/types/models/Province.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "@/urls/FetchEntities"


export const getAllProvinces = () : Promise<IProvince[]> => {
    return getAll<IProvince>(FetchEntities.BASE_PROVINCE)
}

export const getProvinceById = (id: number) : Promise<IProvince> => {
    return getById<IProvince>(FetchEntities.BASE_PROVINCE, id)
}

export const createProvince = async(data : IRequestProvince) : Promise<IProvince> =>{
    return post<IProvince, IRequestProvince>(FetchEntities.BASE_PROVINCE, data)
}

export const updatedProvince = async(data : IRequestProvince, id: number) : Promise<IProvince> => {
    return put<IProvince, IRequestProvince>(FetchEntities.BASE_PROVINCE, data, id)
}

export const deleteProvince = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_PROVINCE, id)
}