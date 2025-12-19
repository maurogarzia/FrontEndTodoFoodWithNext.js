import { Role } from "../enums/Rol"

export type JwtPayload = {
    sub: string
    role: Role
}