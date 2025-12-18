import { deleted, getAll, getById, post, put } from "@/services/core/crud.service"
import { IImage } from "@/types/models/Image.model"
import { IRequestUser, IUser } from "@/types/models/Users.model"
import { METHODS } from "http"
import { headers } from "next/headers"

// Despues hay que cambiar el archivo

const BASE_IMAGES = `${process.env.NEXT_PUBLIC_BASE_URL}/image`
const BASE_CLOUDINARY = `${process.env.NEXT_PUBLIC_BASE_URL}/upload`


export const getAllImages= () : Promise<IImage[]> => {
    return getAll<IImage>(BASE_IMAGES)
}

export const getImageById = (id: number) : Promise<IImage> => {
    return getById<IImage>(BASE_IMAGES, id)
}

export const createImage = async(file : File) => {
    const formData = new FormData()
    formData.append("file", file)

    try {
        const response = await fetch(BASE_CLOUDINARY, {
            method: "POST",
            body: file
        })

        if (!response.ok) throw new Error("Error al subir la imágen")

        const data = await response.json()

        return data
    } catch (error) {
        console.error('Error en create Images', error)
        throw error
    }
}

export const updatedImages = async (file: File, id: number) => {
    const formData = new FormData()
    formData.append("file", file)

    try {
        const response = await fetch(`${BASE_CLOUDINARY}/${id}`, {
        method: "PUT",
        body: formData,
    })

    if (!response.ok) {
        throw new Error("Error al actualizar imagen")
    }

    const data = await response.json()

    return data
    } catch (error) {
        console.error(`Error en updatedImages`, error)
        throw error
    }
}


export const deletedImage = async(id : number) : Promise<void> => {
    return deleted(BASE_IMAGES, id)
}