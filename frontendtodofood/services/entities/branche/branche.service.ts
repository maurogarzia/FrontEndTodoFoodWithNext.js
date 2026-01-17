import { IBranch, IRequestBranch } from "../../../types/models/Branch.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "../../../urls/FetchEntities"

export const getAllBranches= () : Promise<IBranch[]> => {
    return getAll<IBranch>(FetchEntities.BASE_BRANCHES)
}

export const getBranchesById = (id: number) : Promise<IBranch> => {
    return getById<IBranch>(FetchEntities.BASE_BRANCHES, id)
}

export const createBranches = async(data : IRequestBranch) : Promise<IBranch> =>{
    return post<IBranch, IRequestBranch>(FetchEntities.BASE_BRANCHES, data)
}

export const updatedBranch = async(data : IRequestBranch, id: number) : Promise<IBranch> => {
    return put<IBranch, IRequestBranch>(FetchEntities.BASE_BRANCHES, data, id)
}

export const deleteBranch = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_BRANCHES, id)
}