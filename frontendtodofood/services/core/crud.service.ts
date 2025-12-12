import { cookies } from "next/headers"


async function getToken() {
    const cookieStore = await cookies()
    cookieStore.get("token")?.value
}


export const getAll = async <T> (url: string) : Promise<T[]>=> {
    const token = getToken()
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }, 
        cache: 'no-store',
    })   

    if (!response.ok) throw new Error("Error en GET ALL")
    
        return response.json()
}

export const getById = async <T> (url: string, id: number) : Promise<T>=> {

    const token = getToken()
    const response = await fetch(`${url}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }, 
        cache: 'no-store'
    })

    if (!response.ok) throw new Error('Error en GET BY ID')
    
        return response.json()
}

export const post = async<T, D> (url: string, data: D) : Promise<T> => {
    const token = getToken()

    const response = await fetch(url,{
        method: 'POST',
        headers: {
            "ContentType" : "application/json",
            Authorization: `Bearer ${token}`
        }, 
        body: JSON.stringify(data)
    })
    
    if (!response.ok) throw new Error('Error en POST')
    return response.json()
}

export const put = async<T, D> (url: string, data: D, id: number ) : Promise<T>=> {
    const token = getToken()
    const response = await fetch(`${url}/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }, 
        body: JSON.stringify(data)
    })

    if (!response.ok) throw new Error('Error en PUT')
    return response.json()
}

export const deleted = async (url: string, id: number) : Promise<void> => {
    const token = getToken()
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) throw new Error('Error en DELETE')

    return response.json()
}