import { IRequestBranch } from "@/types/models/Branch.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_BRANCHES = `${process.env.NEXT_PUBLIC_BASE_URL}/branches`


export const getAllBranches= () => {
    return getAll(BASE_BRANCHES)
}

export const getBranchesById = (id: number) => {
    return getById(BASE_BRANCHES, id)
}

export const createBranches = async(data : IRequestBranch) =>{
    return post(BASE_BRANCHES, data)
}

export const updatedBranch = async(data : IRequestBranch, id: number) => {
    return put(BASE_BRANCHES, data, id)
}

export const deleteBranch = async(id : number) => {
    return deleted(BASE_BRANCHES, id)
}