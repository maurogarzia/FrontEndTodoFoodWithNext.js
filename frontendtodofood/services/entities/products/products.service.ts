import { IProducts, IRequestProducts } from "@/types/models/Product.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PRODUCTS = `${process.env.NEXT_PUBLIC_BASE_URL}/products`

export const getProducts = async() => {
    return getAll(BASE_PRODUCTS)
}

export const getProductById = (id: number) => {
    return getById(BASE_PRODUCTS, id)
}

export const createProduct = (data: IRequestProducts) => {
    return post(BASE_PRODUCTS, data)
}

export const updateProduct = (id: number, data: IRequestProducts) => {
    return put(BASE_PRODUCTS, data, id)
}

export const deleteProduct = (id: number) => {
    return deleted(BASE_PRODUCTS, id)
}