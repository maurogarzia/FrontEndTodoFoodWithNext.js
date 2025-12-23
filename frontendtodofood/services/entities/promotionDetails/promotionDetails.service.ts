import { IPromotionDetails, IRequestPromotionDetails } from "@/types/models/PromotionDetails.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "@/urls/FetchEntities"

export const getAllPromotionDetails = (): Promise<IPromotionDetails[]> => {
    return getAll<IPromotionDetails>(FetchEntities.BASE_PROMOTION_DETAILS)
}

export const getPromotionDetailsById = (id: number) : Promise<IPromotionDetails> => {
    return getById<IPromotionDetails>(FetchEntities.BASE_PROMOTION_DETAILS, id)
}

export const createPromotionDetails = async(promotionDetail : IRequestPromotionDetails) : Promise<IPromotionDetails> =>{
    return post<IPromotionDetails, IRequestPromotionDetails>(FetchEntities.BASE_PROMOTION_DETAILS, promotionDetail)
}

export const updatedPromotionDetails = async(data : IRequestPromotionDetails, id: number) : Promise<IPromotionDetails> => {
    return put<IPromotionDetails, IRequestPromotionDetails>(FetchEntities.BASE_PROMOTION_DETAILS, data, id)
}

export const deletePromotionDetails = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_PROMOTION_DETAILS, id)
}