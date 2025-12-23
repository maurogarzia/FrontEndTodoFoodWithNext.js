import { deleted, getAll, getById, post, put } from "@/services/core/crud.service"
import { IImage } from "@/types/models/Image.model"
import { FetchEntities } from "@/urls/FetchEntities"

export const getAllImages= () : Promise<IImage[]> => {
    return getAll<IImage>(FetchEntities.BASE_IMAGES)
}

export const getImageById = (id: number) : Promise<IImage> => {
    return getById<IImage>(FetchEntities.BASE_IMAGES, id)
}

export const createImage = async(file : File) => {
    const formData = new FormData()
    formData.append("file", file)

    try {
        const response = await fetch(FetchEntities.BASE_CLOUDINARY, {
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
        const response = await fetch(`${FetchEntities.BASE_CLOUDINARY}/${id}`, {
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
    return deleted(FetchEntities.BASE_IMAGES, id)
}