import { IProductsDetails, IRequestProductsDetails } from "@/types/models/ProductDetail.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PRODUCTS_DETAILS = `${process.env.NEXT_PUBLIC_BASE_URL}/product-details`


export const getAllProductsDetails = () : Promise<IProductsDetails[]> => {
    return getAll<IProductsDetails>(BASE_PRODUCTS_DETAILS)
}

export const getProductDetailsById = (id: number) : Promise<IProductsDetails> => {
    return getById<IProductsDetails>(BASE_PRODUCTS_DETAILS, id)
}

export const createProductDetails = async(productDetails : IRequestProductsDetails) : Promise<IProductsDetails> =>{
    return post<IProductsDetails, IRequestProductsDetails>(BASE_PRODUCTS_DETAILS, productDetails)
}

export const updatedProductDetails = async(data : IRequestProductsDetails, id: number) : Promise<IProductsDetails> => {
    return put<IProductsDetails, IRequestProductsDetails>(BASE_PRODUCTS_DETAILS, data, id)
}

export const deleteProductDetails = async(id : number) : Promise<void> => {
    return deleted(BASE_PRODUCTS_DETAILS, id)
}