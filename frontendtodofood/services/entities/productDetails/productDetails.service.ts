import { IRequestProductsDetails } from "@/types/models/ProductDetail.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PRODUCTS_DETAILS = `${process.env.NEXT_PUBLIC_BASE_URL}/product-details`


export const getAllProductsDetails = () => {
    return getAll(BASE_PRODUCTS_DETAILS)
}

export const getProductDetailsById = (id: number) => {
    return getById(BASE_PRODUCTS_DETAILS, id)
}

export const createProductDetails = async(productDetails : IRequestProductsDetails) =>{
    return post(BASE_PRODUCTS_DETAILS, productDetails)
}

export const updatedProductDetails = async(data : IRequestProductsDetails, id: number) => {
    return put(BASE_PRODUCTS_DETAILS, data, id)
}

export const deleteProductDetails = async(id : number) => {
    return deleted(BASE_PRODUCTS_DETAILS, id)
}