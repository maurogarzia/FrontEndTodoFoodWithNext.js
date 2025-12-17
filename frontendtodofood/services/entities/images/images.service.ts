import { deleted, getAll, getById, post, put } from "@/services/core/crud.service"
import { IImage } from "@/types/models/Image.model"
import { IRequestUser, IUser } from "@/types/models/Users.model"

// Despues hay que cambiar el archivo

const BASE_IMAGES = `${process.env.NEXT_PUBLIC_BASE_URL}/image`


export const getAllImages= () : Promise<IImage[]> => {
    return getAll<IImage>(BASE_IMAGES)
}

export const getImageById = (id: number) : Promise<IImage> => {
    return getById<IImage>(BASE_IMAGES, id)
}

export const createImage = async(data : IImage) : Promise<IImage> =>{
    return post<IImage, IImage>(BASE_IMAGES, data)
}

export const updatedImage = async(data : IImage, id: number) : Promise<IImage> => {
    return put<IImage, IImage>(BASE_IMAGES, data, id)
}

export const deletedImage = async(id : number) : Promise<void> => {
    return deleted(BASE_IMAGES, id)
}