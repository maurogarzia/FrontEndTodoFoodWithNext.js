"use client"

import Link from 'next/link'
import style from '../../Form.module.css'
import { Routes } from '../../../../routes/NavigationRoutes/routes.navigation'
import { registerActions } from '../actions'
import { useActionState } from 'react'

const initialState = {error : ""}

function RegisterForm() {

    const [state, formAction] = useActionState(registerActions, initialState)

    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Registrarse</p>

            <form action={formAction} className={style.form}>
                <div className={style.data}>

                    <div className={style.containerError}>
                        {state?.error && (
                            <p className={style.error}>{state.error}</p>
                        )}
                    </div>

                    <label className={style.label}>Nombre</label>
                    <input type="text" name='name' required={true} placeholder='Jhon'/>

                    <label className={style.label}>Apellido</label>
                    <input type="text" name='lastname' required={true} placeholder='Doe'/>

                    <label className={style.label}>Email</label>
                    <input type="email" name='email' required={true} placeholder='JhonDoe@example.com'/>

                    <label className={style.label}>Nombre de usuario</label>
                    <input type="text" name='username' required={true} placeholder='JhonDoe_17'/>

                    <label className={style.label}>Contraseña</label>
                    <input type="password" name='password' required={true} placeholder='1234'/>
                </div>
                <div className={style.button}>
                    <button>
                        Registrar
                    </button>
                </div>
                <div className={style.registerAndRegister}>
                    <p>Ya tienes cuenta? Logueate -</p>
                    <Link className={style.link} href={Routes.LOGIN}>Aquí</Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm