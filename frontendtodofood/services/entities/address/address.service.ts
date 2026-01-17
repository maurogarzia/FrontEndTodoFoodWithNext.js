import { IAddress, IRequestAddress } from "../../../types/models/Address.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "../../../urls/FetchEntities"

export const getAllAddresses = () : Promise<IAddress[]> => {
    return getAll<IAddress>(FetchEntities.BASE_ADDRESS)
}

export const getAddressById = (id: number) : Promise<IAddress> => {
    return getById<IAddress>(FetchEntities.BASE_ADDRESS, id)
}

export const createAddress = async(data : IRequestAddress) : Promise<IAddress> =>{
    return post<IAddress, IRequestAddress>(FetchEntities.BASE_ADDRESS, data)
}

export const updatedAddress = async(data : IRequestAddress, id: number) : Promise<IAddress> => {
    return put<IAddress, IRequestAddress>(FetchEntities.BASE_ADDRESS, data, id)
}

export const deleteAddress = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_ADDRESS, id)
}