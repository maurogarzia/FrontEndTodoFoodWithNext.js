import { NextRequest, NextResponse } from "next/server"
import jwt from 'jsonwebtoken'
import { Rol } from "./types/enums/Rol"
import { Routes } from "./routes/NavigationRoutes/routes.navigation"
import { AdminRoutes } from "./routes/AdminRoutes/routes.admin"

type JtwPayload = {
    sub : string,
    role: "ADMIN" | "CUSTOMER"
}

const PUBLIC_ROUTES = [
    Routes.HOME,
    Routes.PRODUCTS,
    Routes.PROMOTIONS,
    Routes.SUCURSALES,
    Routes.LOGIN,
    Routes.REGISTER
]
const AUTH_ROUTES = [Routes.PROFILE]

const ADMIN_ROUTES = Object.values(AdminRoutes)


export const middleware = (request : NextRequest) => {
    const token = request.cookies.get('auth_token')?.value
    const {pathname} = request.nextUrl

    // Dejo pasar las rutas publicas
    if (PUBLIC_ROUTES.includes(pathname)) return NextResponse.next()

    //Rutas protegidas
    if (!token && ((AUTH_ROUTES.includes(pathname)) || ADMIN_ROUTES.includes(pathname))){
        return NextResponse.redirect(new URL(Routes.LOGIN, request.nextUrl))
    }


    const allCookies = request.cookies.getAll()

    console.log(
        token,
        '[MW]',
        allCookies.map(c => `${c.name}=${c.value}`)
    )


    // Decodifico token
    // if (token) {
    //     try {
    //         const payload = jwt.verify(
    //             token,
    //             process.env.JWT_SECRET!
    //         ) as JtwPayload

    //         console.log('[MW] payload', payload)
            
    //         if (ADMIN_ROUTES.includes(pathname) && payload.role !== "ADMIN"){
    //             return new NextResponse("Forbidden", {status: 403})
    //         }

    //         return NextResponse.next()
    //     } catch (error) {
    //         console.error('[MW] JWT error', error)
    //         return NextResponse.redirect(new URL(Routes.LOGIN, request.nextUrl))
    //     }
    // }

}

export const config = {
    matcher : [
        '/admin/:path',
        '/profile',

    ]
}