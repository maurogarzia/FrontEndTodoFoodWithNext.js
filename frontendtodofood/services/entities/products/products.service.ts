import { IProducts, IRequestProducts } from "@/types/models/Product.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PRODUCTS = `${process.env.NEXT_PUBLIC_BASE_URL}/products`

export const getAllProducts = () : Promise<IProducts[]> => {
    return getAll<IProducts>(BASE_PRODUCTS)
}

export const getProductById = (id: number) : Promise<IProducts> => {
    return getById<IProducts>(BASE_PRODUCTS, id)
}

export const createProduct = (data: IRequestProducts) : Promise<IProducts> => {
    return post<IProducts, IRequestProducts>(BASE_PRODUCTS, data)
}

export const updateProduct = (id: number, data: IRequestProducts) : Promise<IProducts> => {
    return put<IProducts, IRequestProducts>(BASE_PRODUCTS, data, id)
}

export const deleteProduct = (id: number) : Promise<void> => {
    return deleted(BASE_PRODUCTS, id)
}