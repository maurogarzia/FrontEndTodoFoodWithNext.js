"use client"

import { IUser } from '@/types/models/Users.model'
import style from './DataAccess.module.css'

interface DataAccessProps{
    loginUser: IUser
}

function DataAccess({loginUser}: DataAccessProps) {

    return (
        <div className={style.dataAccess}>
            
                
                <div className={style.paragraph}>
                <p className={style.title}>
                    Tus Datos 
                    <button>Editar</button>
                </p>
                <p>Teléfono: {loginUser.phone ? loginUser.phone : 'Sin teléfono agregado'}</p>
                </div>

                <div className={style.paragraph}>
                <p className={style.title}>
                    Dirección
                    <button>Editar</button>
                </p>
                <p>{loginUser.address ? 
                    (<p>{loginUser.address.street} {loginUser.address.number} ({loginUser.address.locality.name})</p> ) 
                    :
                    ('Sin direcciones agregadas')}
                </p>
                </div>

                <div className={style.paragraph}>
                <p className={style.title}>
                    Datos de acceso
                    <button>Editar</button>
                </p>
                <p>Email: {loginUser.email}</p>
                </div>

            
        </div>
    )
}

export default DataAccess