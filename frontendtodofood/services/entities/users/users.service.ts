import { deleted, getAll, getById, post, put } from "@/services/core/crud.service"
import { JwtPayload } from "@/types/auth/jwtPayload.model"
import { IPatchUser, IRequestUser, IUser } from "@/types/models/Users.model"
import { FetchEntities } from "@/urls/FetchEntities"
import { getToken } from "@/utils/getToken"
import { jwtDecode } from "jwt-decode"

export const getAllUsers= () : Promise<IUser[]> => {
    return getAll<IUser>(FetchEntities.BASE_USERS)
}

export const getUserById = (id: number) : Promise<IUser> => {
    return getById<IUser>(FetchEntities.BASE_USERS, id)
}

export const createUser = async(data : IRequestUser) : Promise<IUser> =>{
    return post<IUser, IRequestUser>(FetchEntities.BASE_USERS, data)
}

export const updatedUser = async(data : IRequestUser, id: number) : Promise<IUser> => {
    return put<IUser, IRequestUser>(FetchEntities.BASE_USERS, data, id)
}

export const deletedUser = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_USERS, id)
}

export const getByUsername = async() : Promise<IUser> => {

    const token = await getToken()

    if (!token) throw new Error('No hay token')

    const decoded = jwtDecode<JwtPayload>(token)
    const username = decoded.sub

    const response = await fetch(`${FetchEntities.BASE_USERS}/username/${username}`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    })

    if (!response.ok) throw new Error('No se pudo encontrar el usuario por su username')

    const data = response.json()

    return data
}

// Edita algunos campos del usuario
export const patchUser = async(id: number, newUser: IPatchUser) : Promise<IPatchUser> => {
    const token = await getToken()

    if (!token) throw new Error('No hay token')

    const response = await fetch(`${FetchEntities.BASE_USERS}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newUser)
    })
    
    if (!response.ok) throw new Error('Error en patch user')

    return response.json()
}

// Cambia la contrasenia
export const updatePassword = async(id: number, data: {oldaPassword: string, newPassword: string}) => {
    const token = await getToken()

    if (!token) throw new Error('No hay token')
    
    const response = await fetch(`${FetchEntities.BASE_USERS}/${id}/password`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) throw new Error('Error al cambiar la contraseña')

    return response.json()
}

// cambia la contrasenia un admin
export const updatePasswordByAdmin = async(id: number, data: {newPassword: string}) => {

    const token = await getToken()

    if (!token) throw new Error('No hay token')

    const response = await fetch(`${FetchEntities.BASE_USERS}/${id}/password/admin`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) throw new Error('No se pudo cambiar la contrasenia desde admin')

    return response.json()
}