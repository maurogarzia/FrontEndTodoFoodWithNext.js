import { IRequestAddress } from "@/types/models/Address.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_ADDRESS = `${process.env.NEXT_PUBLIC_BASE_URL}/address`


export const getAllAddresses = () => {
    return getAll(BASE_ADDRESS)
}

export const getAddressById = (id: number) => {
    return getById(BASE_ADDRESS, id)
}

export const createAddress = async(data : IRequestAddress) =>{
    return post(BASE_ADDRESS, data)
}

export const updatedAddress = async(data : IRequestAddress, id: number) => {
    return put(BASE_ADDRESS, data, id)
}

export const deleteAddress = async(id : number) => {
    return deleted(BASE_ADDRESS, id)
}