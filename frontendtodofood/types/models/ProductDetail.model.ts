import { IProducts } from "./Product.model"
import { ISize } from "./Size.model"

export interface IProductsDetails{
    id: number,
    stock: number,
    price: number,
    size: ISize,
    product : IProducts
}

export interface IRequestProductsDetails {
    id?: number | null,
    stock: number,
    price: number,
    size: {id: number | null},
    
    product : {id : number | null}
}