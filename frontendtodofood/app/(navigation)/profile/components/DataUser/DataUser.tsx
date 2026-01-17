"use client"

import style from './DataUser.module.css'

import { logout } from '../../logout'
import { IUser } from '../../../../../types/models/Users.model'

interface DataUSerProps{
    loginUser: IUser
}

function DataUser({loginUser} : DataUSerProps) {

    return (
        <div className={style.containerPrincipal}>
            <div className={style.data}>
                <p>Nombre</p>
                <p className={style.user}>{loginUser.name} {loginUser.lastname}</p>
                <p>Nombre de Usuario</p>
                <p className={style.user}>{loginUser.username}</p>
                <form action={logout}>
                    <button>Cerrar sesión</button>
                </form>
            </div>
        </div>
    )
}

export default DataUser