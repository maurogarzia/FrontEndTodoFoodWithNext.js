import { ICategory } from "@/types/models/Category.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"

const BASE_CATEGORY = `${process.env.NEXT_PUBLIC_BASE_URL}/category`


export const getAllCategories= () : Promise<ICategory[]> => {
    return getAll<ICategory>(BASE_CATEGORY)
}

export const getCategoryById = (id: number) : Promise<ICategory> => {
    return getById<ICategory>(BASE_CATEGORY, id)
}

export const createCategory = async(category : ICategory) : Promise<ICategory> =>{
    return post<ICategory, ICategory>(BASE_CATEGORY, category)
}

export const updatedCategory = async(data : ICategory, id: number) : Promise<ICategory> => {
    return put<ICategory, ICategory>(BASE_CATEGORY, data, id)
}

export const deleteCategory = async(id : number) : Promise<void> => {
    return deleted(BASE_CATEGORY, id)
}