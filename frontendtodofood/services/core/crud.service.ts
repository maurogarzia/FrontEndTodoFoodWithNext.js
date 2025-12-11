import { axiosInstance } from "@/interceptor/interceptor"


export const getAll = async <T> (url: string) : Promise<T[]>=> {
    const response = await axiosInstance.get(url)   
    return response.data
}

export const getById = async <T> (url: string, id: number) : Promise<T>=> {
    const response = await axiosInstance.get(`${url}/${id}`)
    return response.data
}

export const post = async<T, D> (url: string, data: D) : Promise<T> => {
    const response = await axiosInstance.post(url, data)
    return response.data
}

export const put = async<T, D> (url: string, data: D, id: number ) : Promise<T>=> {
    const response = await axiosInstance.put(`${url}/${id}`, data)
    return response.data
}

export const deleted = async (url: string, id: number) : Promise<void> => {
    const response = await axiosInstance.delete(`${url}/${id}`)
    return response.data
}