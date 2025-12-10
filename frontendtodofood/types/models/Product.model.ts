import { ICategory } from "./Category.model"
import { IImage } from "./Image.model"


export interface IProducts {
    id: number,
    name: string,
    category: ICategory,
    description : string,
    image : IImage
}

export interface IRequestProducts {
    id?: number | null,
    name: string,
    category: {id: number | null},
    image : {id: number | null}
    description : string
}