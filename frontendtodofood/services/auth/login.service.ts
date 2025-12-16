import { ILogin } from "@/types/auth/login.model";

const BASE_LOGIN = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`

export async function login(req: ILogin ) {
    try {
    
        const {username, password} = req
    
        const response = await fetch(BASE_LOGIN, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username, password}),
            cache: "no-store"
        })
    
        if (!response.ok) throw new Error('Credenciales invalidas')
        
        const data = await response.json()
        return data
        
    } catch (error) {
        console.error("Error login:", error);
        throw new Error("Ocurrio un error")
    }
}