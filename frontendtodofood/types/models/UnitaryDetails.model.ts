import { IProductsDetails } from "./ProductDetail.model"


export interface IUnitaryDetails {
    id: number
    quantity : number,
    productDetails : IProductsDetails
}


export interface IRequestUnitaryDetails {
    id :  number | null
    quantity : number,
    productDetails : {id : number | null}
}