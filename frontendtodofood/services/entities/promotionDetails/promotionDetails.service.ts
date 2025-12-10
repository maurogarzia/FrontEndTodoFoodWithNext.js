import { IRequestPromotionDetails } from "@/types/models/PromotionDetails.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PROMOTIONS_DETAILS = `${process.env.NEXT_PUBLIC_BASE_URL}/promotion-details`


export const getAllPromotionDetails = () => {
    return getAll(BASE_PROMOTIONS_DETAILS)
}

export const getPromotionDetailsById = (id: number) => {
    return getById(BASE_PROMOTIONS_DETAILS, id)
}

export const createPromotionDetails = async(promotionDetail : IRequestPromotionDetails) =>{
    return post(BASE_PROMOTIONS_DETAILS, promotionDetail)
}

export const updatedPromotionDetails = async(data : IRequestPromotionDetails, id: number) => {
    return put(BASE_PROMOTIONS_DETAILS, data, id)
}

export const deletePromotionDetails = async(id : number) => {
    return deleted(BASE_PROMOTIONS_DETAILS, id)
}