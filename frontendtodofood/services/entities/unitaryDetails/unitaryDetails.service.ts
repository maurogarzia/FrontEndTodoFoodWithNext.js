import { IRequestUnitaryDetails, IUnitaryDetails } from "@/types/models/UnitaryDetails.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "@/urls/FetchEntities"

export const getAllUnitaryDetails= () : Promise<IUnitaryDetails[]> => {
    return getAll<IUnitaryDetails>(FetchEntities.BASE_UNIT_DETAILS)
}

export const getUnitaryDetailsById = (id: number) : Promise<IUnitaryDetails> => {
    return getById<IUnitaryDetails>(FetchEntities.BASE_UNIT_DETAILS, id)
}

export const createUnitaryDetail = async(data : IRequestUnitaryDetails) : Promise<IUnitaryDetails> =>{
    return post<IUnitaryDetails, IRequestUnitaryDetails>(FetchEntities.BASE_UNIT_DETAILS, data)
}

export const updatedUnitaryDetail = async(data : IRequestUnitaryDetails, id: number) : Promise<IUnitaryDetails> => {
    return put<IUnitaryDetails, IRequestUnitaryDetails>(FetchEntities.BASE_UNIT_DETAILS, data, id)
}

export const deleteUnitaryDetail = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_UNIT_DETAILS, id)
}