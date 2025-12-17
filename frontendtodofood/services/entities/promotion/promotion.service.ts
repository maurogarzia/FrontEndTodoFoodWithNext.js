import { IPromotion, IRequestPromotion } from "@/types/models/Promotions.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PROMOTIONS = `${process.env.NEXT_PUBLIC_BASE_URL}/promotion`

export const getAllPromotions = () : Promise<IPromotion[]> => {
    return getAll<IPromotion>(BASE_PROMOTIONS)
}

export const getPRomotionById = async(id: number) : Promise<IPromotion> => {
    return getById<IPromotion>(BASE_PROMOTIONS, id)
}

export const createPromotion = (data: IRequestPromotion) : Promise<IPromotion> => {
    return post<IPromotion, IRequestPromotion>(BASE_PROMOTIONS, data)
}

export const updatePromotion = (data: IRequestPromotion, id: number) : Promise<IPromotion> => {
    return put<IPromotion, IRequestPromotion>(BASE_PROMOTIONS, data, id)
}

export const deletePromotion = (id: number) : Promise<void> => {
    return deleted(BASE_PROMOTIONS, id)
}