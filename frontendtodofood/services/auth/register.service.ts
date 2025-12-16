import { IRegister } from "@/types/auth/register.model";
import { NextRequest, NextResponse } from "next/server";

const BASE_REGISTER = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`

export const POST = async(request : NextRequest) => {
    try {
        const body : IRegister = await request.json()

        const res = await fetch(BASE_REGISTER, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (!res.ok) return NextResponse.json({ error: data || "Error al registrar usuario" }, { status: res.status });
        
        return data

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error interno al registrar" }, { status: 500 });
    }
}