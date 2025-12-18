"use client"

import Link from 'next/link'
import style from '../../Form.module.css'
import { Routes } from '@/routes/NavigationRoutes/routes.navigation'
import React, { useActionState, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { loginActions } from '../actions'
import { useFormState } from 'react-dom'


const initialState = {error : ""}

function LoginForm() {



    const [state, formAction] = useActionState(loginActions, initialState)

    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Iniciar Sesión</p>

            <form action={formAction} className={style.form}>
                <div className={style.data}>

                    <div className={style.containerError}>
                        {state?.error && (
                            <p className={style.error}>{state.error}</p>
                        )}
                    </div>

                    <label className={style.label}>Nombre de usuario</label>
                    <input type="text" name='username' placeholder='JhonDoe_17'/>
                    <label className={style.label}>Contraseña</label>
                    <input type="password" name='password' placeholder='1234'/>
                </div>
                <div className={style.button}>
                    <button >
                        Inicar Sesión
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