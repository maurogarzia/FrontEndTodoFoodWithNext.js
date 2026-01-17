import { IProductsDetails, IRequestProductsDetails } from "../../../types/models/ProductDetail.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "../../../urls/FetchEntities"

export const getAllProductsDetails = () : Promise<IProductsDetails[]> => {
    return getAll<IProductsDetails>(FetchEntities.BASE_PRODUCT_DETAIL)
}

export const getProductDetailsById = (id: number) : Promise<IProductsDetails> => {
    return getById<IProductsDetails>(FetchEntities.BASE_PRODUCT_DETAIL, id)
}

export const createProductDetails = async(productDetails : IRequestProductsDetails) : Promise<IProductsDetails> =>{
    return post<IProductsDetails, IRequestProductsDetails>(FetchEntities.BASE_PRODUCT_DETAIL, productDetails)
}

export const updatedProductDetails = async(data : IRequestProductsDetails, id: number) : Promise<IProductsDetails> => {
    return put<IProductsDetails, IRequestProductsDetails>(FetchEntities.BASE_PRODUCT_DETAIL, data, id)
}

export const deleteProductDetails = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_PRODUCT_DETAIL, id)
}