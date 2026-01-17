"use server"

import { login } from "@/services/auth/login.service";
import { ILogin } from "@/types/auth/login.model";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginActions(prevState: {error?: string} | undefined, formData : FormData) {
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    const user : ILogin = {username: username, password: password}

    const result = await login(user)

    if ("error" in result){
        return {error: result.error}
    }

    const cookieStore = await cookies()
    
    cookieStore.set("auth_token", result.token, {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
    })

    redirect("/")
    
}