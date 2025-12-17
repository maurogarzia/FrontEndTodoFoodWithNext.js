import { deleted, getAll, getById, post, put } from "@/services/core/crud.service"
import { IRequestUser, IUser } from "@/types/models/Users.model"


const BASE_USERS = `${process.env.NEXT_PUBLIC_BASE_URL}/user`


export const getAllUsers= () : Promise<IUser[]> => {
    return getAll<IUser>(BASE_USERS)
}

export const getUserById = (id: number) : Promise<IUser> => {
    return getById<IUser>(BASE_USERS, id)
}

export const createUser = async(data : IRequestUser) : Promise<IUser> =>{
    return post<IUser, IRequestUser>(BASE_USERS, data)
}

export const updatedUser = async(data : IRequestUser, id: number) : Promise<IUser> => {
    return put<IUser, IRequestUser>(BASE_USERS, data, id)
}

export const deletedUser = async(id : number) : Promise<void> => {
    return deleted(BASE_USERS, id)
}