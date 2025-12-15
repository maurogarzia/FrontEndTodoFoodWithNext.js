"use client"

import Link from 'next/link'
import style from '../../Form.module.css'
import { Routes } from '@/routes/NavigationRoutes/routes.navigation'
import React, { useState, useTransition } from 'react'
import { login } from '@/services/auth/auth.service'

import { IUser } from '@/types/models/Users.model'
import { ILogin } from '@/types/auth/login.model'
import { useRouter } from 'next/navigation'

function LoginForm() {

    const router = useRouter()
    const [pending, startTransition] = useTransition()
    const [error, setError] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const username = (form.username as any).value
        const password = (form.password as any).value

        const loginUser : ILogin = {
            username : username,
            password: password
        }

        startTransition(async () => {
            try {
                await login(loginUser)
                router.push('/')
            } catch (error) {
                setError("Credenciales Incorrectas")
            }
        })

    }

    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Iniciar Sesión</p>

            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.data}>

                    {error && <p className={style.error}>{error}</p>}

                    <label className={style.label}>Nombre de usuario</label>
                    <input type="text" name='username' placeholder='JhonDoe_17'/>
                    <label className={style.label}>Contraseña</label>
                    <input type="text" name='password' placeholder='1234'/>
                </div>
                <div className={style.button}>
                    <button disabled={pending}>
                        {pending ? 'Cargando' : 'Inicar Sesión'}
                    </button>
                </div>
                <div className={style.registerAndRegister}>
                    <p>No tienes cuenta? Registrate gratis -</p>
                    <Link className={style.link} href={Routes.REGISTER}>Aquí</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm