import { IBranch, IRequestBranch } from "@/types/models/Branch.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_BRANCHES = `${process.env.NEXT_PUBLIC_BASE_URL}/branches`


export const getAllBranches= () : Promise<IBranch[]> => {
    return getAll<IBranch>(BASE_BRANCHES)
}

export const getBranchesById = (id: number) : Promise<IBranch> => {
    return getById<IBranch>(BASE_BRANCHES, id)
}

export const createBranches = async(data : IRequestBranch) : Promise<IBranch> =>{
    return post<IBranch, IRequestBranch>(BASE_BRANCHES, data)
}

export const updatedBranch = async(data : IRequestBranch, id: number) : Promise<IBranch> => {
    return put<IBranch, IRequestBranch>(BASE_BRANCHES, data, id)
}

export const deleteBranch = async(id : number) : Promise<void> => {
    return deleted(BASE_BRANCHES, id)
}