import { IImage } from "./Image.model"



export interface IPromotion {
    id: number,
    name: string
    initDate: Date,
    finallyDate: Date,
    description: string,
    image: IImage
}

export interface IRequestPromotion {
    id: number | null,
    name: string
    initDate: Date,
    finallyDate: Date,
    description: string,
    image: {id : number | null}
}