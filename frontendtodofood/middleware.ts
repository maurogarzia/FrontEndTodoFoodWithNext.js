import { NextRequest, NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode'
import { Routes } from './routes/NavigationRoutes/routes.navigation'
import { Role } from './types/enums/Rol'
import { JwtPayload } from './types/auth/jwtPayload.model'


export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value
    const { pathname } = request.nextUrl

  // Perfil requiere login
    if ((pathname === Routes.PROFILE || pathname === Routes.CART) && !token) {
        return NextResponse.redirect(new URL(Routes.LOGIN, request.url))
    }

    if (!token) {
        return NextResponse.redirect(new URL(Routes.LOGIN, request.url))
    }

    try {
        const decoded = jwtDecode<JwtPayload>(token)

        const isExpired = decoded.exp * 1000 < Date.now()

        if (isExpired) {
            const response = NextResponse.redirect(new URL(Routes.LOGIN, request.url))
            response.cookies.delete("auth_token")
            return response
        }
        
        if (pathname.startsWith('/admin') && decoded.role !== Role.admin) {
            return NextResponse.redirect(new URL(Routes.LOGIN, request.url))
        }

        return NextResponse.next()
    } catch {
        return NextResponse.redirect(new URL(Routes.LOGIN, request.url))
    }
}

export const config = {
    matcher: ['/admin/:path*', '/profile', '/cart'],
}
