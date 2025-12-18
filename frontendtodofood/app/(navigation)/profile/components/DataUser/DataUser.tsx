"use client"

import Image from 'next/image'
import style from './DataUser.module.css'

import { logout } from '../../logout'

function DataUser() {

   

    return (
        <div className={style.containerPrincipal}>
            <div className={style.data}>
                <Image width={80} height={80} alt='' src=''/>
                <p>Nombre y Apellido</p>
                <p>username</p>
                <form action={logout}>
                    <button >Cerrar sesión</button>
                </form>
            </div>
        </div>
    )
}

export default DataUser