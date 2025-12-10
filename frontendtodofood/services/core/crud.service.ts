import { axiosInstance } from "@/interceptor/interceptor"


export const getAll = async(url: string) => {
    const response = await axiosInstance.get(url)   
    return response.data
}

export const getById = async (url: string, id: number) => {
    const response = await axiosInstance.get(`${url}/${id}`)
    return response.data
}

export const post = async(url: string, data: any) => {
    const response = await axiosInstance.post(url, data)
    return response.data
}

export const put = async(url: string, data: any, id: number ) => {
    const response = await axiosInstance.put(`${url}/${id}`, data)
    return response.data
}

export const deleted = async (url: string, id: number) => {
    const response = await axiosInstance.delete(`${url}/${id}`)
    return response.data
}