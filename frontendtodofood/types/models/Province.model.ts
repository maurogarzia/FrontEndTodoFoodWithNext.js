import { ICountry } from "./Country,model"


export interface IProvince{
    id: number 
    name: string
    country: ICountry

}

export interface IRequestProvince{
    id?: number | null
    name: string
    country: {id : number | null}
}