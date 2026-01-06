import { IProductsDetails } from "./ProductDetail.model";
import { IPromotionDetails } from "./PromotionDetails.model";


export interface ICart {
    id: string,
    name: string
    price: number,
    quantity: number,
    image: string
}