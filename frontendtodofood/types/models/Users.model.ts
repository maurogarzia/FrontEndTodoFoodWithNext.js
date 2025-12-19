
import { Role } from "../enums/Rol"
import { IAddress } from "./Address.model"



export interface IUser {
    id: number,
    name: string,
    lastname : string
    password: string,
    role: Role,
    email: string,
    address: IAddress,
    username : string
    phone : number
}

export interface IRequestUser {
    id?: number | null,
    name: string
    lastname : string
    password: string,
    role: Role | null,
    email: string,
    address: {id: number | null} | null,
    username : string
    phone : number 
}

export interface IPatchUser{
    id ? : number 
    name : string,
    lastname : string,
    phone : string,
    email : string,
    address : {id : number | null} | null
    username : string
    role : Role
}