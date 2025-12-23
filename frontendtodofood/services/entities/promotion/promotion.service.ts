import { IPromotion, IRequestPromotion } from "@/types/models/Promotions.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "@/urls/FetchEntities"

export const getAllPromotions = () : Promise<IPromotion[]> => {
    return getAll<IPromotion>(FetchEntities.BASE_PROMOTIONS)
}

export const getPRomotionById = async(id: number) : Promise<IPromotion> => {
    return getById<IPromotion>(FetchEntities.BASE_PROMOTIONS, id)
}

export const createPromotion = (data: IRequestPromotion) : Promise<IPromotion> => {
    return post<IPromotion, IRequestPromotion>(FetchEntities.BASE_PROMOTIONS, data)
}

export const updatePromotion = (data: IRequestPromotion, id: number) : Promise<IPromotion> => {
    return put<IPromotion, IRequestPromotion>(FetchEntities.BASE_PROMOTIONS, data, id)
}

export const deletePromotion = (id: number) : Promise<void> => {
    return deleted(FetchEntities.BASE_PROMOTIONS, id)
}