"use client"
import { useState } from 'react'
import style from './Header.module.css'
import ItemsResponsive from './HeaderComponents/ItemsResponsive/ItemsResponsive'
import Link from 'next/link'
import { Routes } from '@/routes/NavigationRoutes/routes.navigation'


function Header() {

    const [viewResponsive, setViewResponsive] = useState<boolean>(false)

    return (
        <div>
            <div className={style.containerPrincipal}>
                <Link className={style.title} href={Routes.HOME}><h1>TodoFood</h1></Link>
                <div className={style.items}>
                    <Link className={style.item} href={Routes.PROMOTIONS}>Promociones</Link>
                    <Link className={style.item} href={Routes.PRODUCTS}>Productos</Link>
                    <Link className={style.item} href={Routes.SUCURSALES}>Sucursales</Link>
                    
                </div>
                
                <div className={style.containerCart}>
                    <Link href={Routes.CART} className={style.cart}>
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </Link>
                </div>
                <div className={style.containerAccount}>
                    <Link className={style.account} href={Routes.PROFILE}>
                        <span className="material-symbols-outlined">account_circle</span>
                    </Link>
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