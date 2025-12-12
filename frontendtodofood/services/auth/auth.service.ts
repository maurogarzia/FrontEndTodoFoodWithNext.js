import { ILogin } from "@/types/auth/login.model";
import { IRegister } from "@/types/auth/register.model";
import { cookies } from "next/headers";

const BASE_REGISTER = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`
const BASE_LOGIN = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`


export const register = async(user: IRegister) => {
    try {
        const res = await fetch(BASE_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (!res.ok) throw new Error('No se pudo registrar el usuario')

        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const login = async(user: ILogin) => {
    try {
        const res = await fetch(BASE_LOGIN, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if (!res.ok) throw new Error('Credenciales incorrectas')

        const data = await res.json()

        const token = data?.token

        const cookieStore = await cookies()

        if (token){
            
            cookieStore.set("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/'
            })
        }

        return data.user
    } catch (error) {
        console.error(error)
        throw error
    }
}