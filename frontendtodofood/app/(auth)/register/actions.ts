"use server"

import { register } from "@/services/auth/register.service"
import { IRegister } from "@/types/auth/register.model"
import { Role } from "@/types/enums/Rol"
import { redirect } from "next/navigation";

export async function registerActions (prevState: {error?: string}, formData: FormData)  {
    const name = formData.get("name") as string
    const lastname = formData.get("lastname") as string
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    const email = formData.get("email") as string
    
    const user : IRegister = {
        name: name,
        lastname: lastname,
        username: username,
        password: password,
        email: email,
        role: Role.user
    }

    const result = await register(user)

    if ("error" in result){
        return {error: result.error}
    }

    redirect('/login')

}