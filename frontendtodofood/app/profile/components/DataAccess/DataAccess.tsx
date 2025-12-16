"use client"

import style from './DataAccess.module.css'

function DataAccess() {

    return (
        <div className={style.dataAccess}>
            
                
                <div className={style.paragraph}>
                <p className={style.title}>
                    Tus Datos 
                    <button>Editar</button>
                </p>
                <p>Teléfono: 2616928706</p>
                <p>Fecha nacimiento: 9/12/18</p>
                </div>

                <div className={style.paragraph}>
                <p className={style.title}>
                    Dirección
                    <button>Editar</button>
                </p>
                <p>No hay direcciones guardadas</p>
                </div>

                <div className={style.paragraph}>
                <p className={style.title}>
                    Datos de acceso
                    <button>Editar</button>
                </p>
                <p>Email: user@gmail.com</p>
                <p>Contraseña: ****</p>
                </div>

            
        </div>
    )
}

export default DataAccess