"use client"

import Link from 'next/link'
import style from '../../Form.module.css'
import { Routes } from '@/routes/NavigationRoutes/routes.navigation'
import { useState, useTransition } from 'react'
import { IRegister } from '@/types/auth/register.model'
import { Rol } from '@/types/enums/Rol'
import { register } from '@/services/auth/auth.service'
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'

function RegisterForm() {

    const router = useRouter()

    const [pending, setTransition] = useTransition()
    const [error, setError] = useState('')

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const name = (form.name as any).value
        const username = (form.username as any).value
        const email = (form.email as any).value
        const lastname = (form.lastname as any).value
        const password = (form.password as any).value

        const registerUser : IRegister = {
            name : name,
            username : username,
            email : email,
            lastname: lastname,
            password: password,
            role: null
        }

        setTransition(async() => {
            try {
                await register(registerUser)
                alert('Se registró correctamente, ahora debe loguearse')
                router.push('/login')
            } catch (error) {
                setError("No se pudo registrar el usuario")
            }
        })
    }

    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Registrarse</p>

            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.data}>

                    {error && <p className={style.error}>{error}</p>}

                    <label className={style.label}>Nombre</label>
                    <input type="text" name='name' placeholder='Jhon'/>

                    <label className={style.label}>Apellido</label>
                    <input type="text" name='lastname' placeholder='Doe'/>

                    <label className={style.label}>Email</label>
                    <input type="text" name='email' placeholder='JhonDoe@example.com'/>

                    <label className={style.label}>Nombre de usuario</label>
                    <input type="text" name='username' placeholder='JhonDoe_17'/>

                    <label className={style.label}>Contraseña</label>
                    <input type="text" name='password' placeholder='1234'/>
                </div>
                <div className={style.button}>
                    <button disabled={pending}>
                        {pending ? 'Cargando' : 'Registrando'}
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