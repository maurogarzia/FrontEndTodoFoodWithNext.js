import { deleted, getAll, getById, post, put } from "@/services/core/crud.service"
import { JwtPayload } from "@/types/auth/jwtPayload.model"
import { IRequestUser, IUser } from "@/types/models/Users.model"
import { getToken } from "@/utils/getToken"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"


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

export const getByUsername = async() : Promise<IUser> => {

    
    const token = await getToken()

    if (!token) throw new Error('No hay token')

    const decoded = jwtDecode<JwtPayload>(token)
    const username = decoded.sub

    const response = await fetch(`${BASE_USERS}/username/${username}`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    })

    if (!response.ok) throw new Error('No se pudo encontrar el usuario por su username')

    const data = response.json()

    return data
}