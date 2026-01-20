import { Role } from "../enums/Rol";

export interface IRegister {
    name: string
    lastname: string
    username: string
    password: string
    role: Role | null;
    email: string
}