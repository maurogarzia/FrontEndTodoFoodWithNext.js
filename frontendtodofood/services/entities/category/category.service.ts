import { ICategory } from "@/types/models/Category.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_CATEGORY = `${process.env.NEXT_PUBLIC_BASE_URL}/category`


export const getAllCategories= () => {
    return getAll(BASE_CATEGORY)
}

export const getCategoryById = (id: number) => {
    return getById(BASE_CATEGORY, id)
}

export const createCategory = async(category : ICategory) =>{
    return post(BASE_CATEGORY, category)
}

export const updatedCategory = async(data : ICategory, id: number) => {
    return put(BASE_CATEGORY, data, id)
}

export const deleteCategory = async(id : number) => {
    return deleted(BASE_CATEGORY, id)
}