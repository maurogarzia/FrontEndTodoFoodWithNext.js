import { ICategory } from "@/types/models/Category.model"
import { deleted, getAll, getById, post, put } from "../../core/crud.service"
import { FetchEntities } from "@/urls/FetchEntities"

export const getAllCategories= () : Promise<ICategory[]> => {
    return getAll<ICategory>(FetchEntities.BASE_CATEGORIES)
}

export const getCategoryById = (id: number) : Promise<ICategory> => {
    return getById<ICategory>(FetchEntities.BASE_CATEGORIES, id)
}

export const createCategory = async(category : ICategory) : Promise<ICategory> =>{
    return post<ICategory, ICategory>(FetchEntities.BASE_CATEGORIES, category)
}

export const updatedCategory = async(data : ICategory, id: number) : Promise<ICategory> => {
    return put<ICategory, ICategory>(FetchEntities.BASE_CATEGORIES, data, id)
}

export const deleteCategory = async(id : number) : Promise<void> => {
    return deleted(FetchEntities.BASE_CATEGORIES, id)
}