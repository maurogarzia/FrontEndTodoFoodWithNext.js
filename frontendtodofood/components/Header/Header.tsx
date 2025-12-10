"use client"
import { useState } from 'react'
import style from './Header.module.css'
import ItemsResponsive from './HeaderComponents/ItemsResponsive/ItemsResponsive'


function Header() {

    const [viewResponsive, setViewResponsive] = useState<boolean>(false)

    return (
        <div>
            <div className={style.containerPrincipal}>
                <h1>TodoFood</h1>
                <div className={style.items}>
                    <p>Promociones</p>
                    <p>Productos</p>
                    <p>Sucursales</p>
                </div>

                <div className={style.search}>
                    <input type="text" placeholder='Buscar' />
                    <span className="material-symbols-outlined">search</span>
                </div>

                <div className={style.containerAccount}>
                    <span className="material-symbols-outlined">account_circle</span>
                </div>

                <div className={style.viewResponsive}>
                    <span onClick={() => setViewResponsive(true)} className="material-symbols-outlined">menu</span>
                </div>

            </div>

            {viewResponsive && 
                <div className={style.ItemsResponsive}><ItemsResponsive setView={setViewResponsive}/></div>
            }
        </div>
    )
}

export default Header