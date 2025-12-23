import { IProducts, IRequestProducts } from "@/types/models/Product.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "@/urls/FetchEntities"

export const getAllProducts = () : Promise<IProducts[]> => {
    return getAll<IProducts>(FetchEntities.BASE_PRODUCT)
}

export const getProductById = (id: number) : Promise<IProducts> => {
    return getById<IProducts>(FetchEntities.BASE_PRODUCT, id)
}

export const createProduct = (data: IRequestProducts) : Promise<IProducts> => {
    return post<IProducts, IRequestProducts>(FetchEntities.BASE_PRODUCT, data)
}

export const updateProduct = (id: number, data: IRequestProducts) : Promise<IProducts> => {
    return put<IProducts, IRequestProducts>(FetchEntities.BASE_PRODUCT, data, id)
}

export const deleteProduct = (id: number) : Promise<void> => {
    return deleted(FetchEntities.BASE_PRODUCT, id)
}