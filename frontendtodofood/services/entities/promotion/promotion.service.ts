import { IRequestPromotion } from "@/types/models/Promotions.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_PROMOTIONS = `${process.env.NEXT_PUBLIC_BASE_URL}/promotions`

export const getPromotions = () => {
    return getAll(BASE_PROMOTIONS)
}

export const getPRomotionById = (id: number) => {
    return getById(BASE_PROMOTIONS, id)
}

export const createPromotion = (data: IRequestPromotion) => {
    return post(BASE_PROMOTIONS, data)
}

export const updatePromotion = (data: IRequestPromotion, id: number) => {
    return put(BASE_PROMOTIONS, data, id)
}

export const deletePromotion = (id: number) => {
    return deleted(BASE_PROMOTIONS, id)
}