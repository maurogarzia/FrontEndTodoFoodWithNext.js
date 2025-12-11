import { IPromotionDetails, IRequestPromotionDetails } from "@/types/models/PromotionDetails.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PROMOTIONS_DETAILS = `${process.env.NEXT_PUBLIC_BASE_URL}/promotion-details`


export const getAllPromotionDetails = (): Promise<IPromotionDetails[]> => {
    return getAll<IPromotionDetails>(BASE_PROMOTIONS_DETAILS)
}

export const getPromotionDetailsById = (id: number) : Promise<IPromotionDetails> => {
    return getById<IPromotionDetails>(BASE_PROMOTIONS_DETAILS, id)
}

export const createPromotionDetails = async(promotionDetail : IRequestPromotionDetails) : Promise<IPromotionDetails> =>{
    return post<IPromotionDetails, IRequestPromotionDetails>(BASE_PROMOTIONS_DETAILS, promotionDetail)
}

export const updatedPromotionDetails = async(data : IRequestPromotionDetails, id: number) : Promise<IPromotionDetails> => {
    return put<IPromotionDetails, IRequestPromotionDetails>(BASE_PROMOTIONS_DETAILS, data, id)
}

export const deletePromotionDetails = async(id : number) : Promise<void> => {
    return deleted(BASE_PROMOTIONS_DETAILS, id)
}