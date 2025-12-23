import { getAll } from "@/services/core/crud.service";
import { getToken } from "@/utils/getToken";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params } : {params: {path: string[]}}) {
    const token  = await getToken()
    if (!token) return NextResponse.json({message : 'No autorizado'}, {status: 401})

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${params.path.join("/")}`
    const data = await getAll(url)
    return NextResponse.json(data)
}