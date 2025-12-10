import { IRequestUnitaryDetails } from "@/types/models/UnitaryDetails.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_UNITARY_DETAILS = `${process.env.NEXT_PUBLIC_BASE_URL}/unitary_details`


export const getAllUnitaryDetails= () => {
    return getAll(BASE_UNITARY_DETAILS)
}

export const getUnitaryDetailsById = (id: number) => {
    return getById(BASE_UNITARY_DETAILS, id)
}

export const createUnitaryDetail = async(data : IRequestUnitaryDetails) =>{
    return post(BASE_UNITARY_DETAILS, data)
}

export const updatedUnitaryDetail = async(data : IRequestUnitaryDetails, id: number) => {
    return put(BASE_UNITARY_DETAILS, data, id)
}

export const deleteUnitaryDetail = async(id : number) => {
    return deleted(BASE_UNITARY_DETAILS, id)
}