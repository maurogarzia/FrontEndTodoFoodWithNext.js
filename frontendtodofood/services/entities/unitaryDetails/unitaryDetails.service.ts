import { IRequestUnitaryDetails, IUnitaryDetails } from "@/types/models/UnitaryDetails.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_UNITARY_DETAILS = `${process.env.NEXT_PUBLIC_BASE_URL}/unitary_details`


export const getAllUnitaryDetails= () : Promise<IUnitaryDetails[]> => {
    return getAll<IUnitaryDetails>(BASE_UNITARY_DETAILS)
}

export const getUnitaryDetailsById = (id: number) : Promise<IUnitaryDetails> => {
    return getById<IUnitaryDetails>(BASE_UNITARY_DETAILS, id)
}

export const createUnitaryDetail = async(data : IRequestUnitaryDetails) : Promise<IUnitaryDetails> =>{
    return post<IUnitaryDetails, IRequestUnitaryDetails>(BASE_UNITARY_DETAILS, data)
}

export const updatedUnitaryDetail = async(data : IRequestUnitaryDetails, id: number) : Promise<IUnitaryDetails> => {
    return put<IUnitaryDetails, IRequestUnitaryDetails>(BASE_UNITARY_DETAILS, data, id)
}

export const deleteUnitaryDetail = async(id : number) : Promise<void> => {
    return deleted(BASE_UNITARY_DETAILS, id)
}