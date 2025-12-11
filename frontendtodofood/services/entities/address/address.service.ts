import { IAddress, IRequestAddress } from "@/types/models/Address.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_ADDRESS = `${process.env.NEXT_PUBLIC_BASE_URL}/address`


export const getAllAddresses = () : Promise<IAddress[]> => {
    return getAll<IAddress>(BASE_ADDRESS)
}

export const getAddressById = (id: number) : Promise<IAddress> => {
    return getById<IAddress>(BASE_ADDRESS, id)
}

export const createAddress = async(data : IRequestAddress) : Promise<IAddress> =>{
    return post<IAddress, IRequestAddress>(BASE_ADDRESS, data)
}

export const updatedAddress = async(data : IRequestAddress, id: number) : Promise<IAddress> => {
    return put<IAddress, IRequestAddress>(BASE_ADDRESS, data, id)
}

export const deleteAddress = async(id : number) : Promise<void> => {
    return deleted(BASE_ADDRESS, id)
}