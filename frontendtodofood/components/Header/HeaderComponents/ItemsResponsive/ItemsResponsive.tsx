import Link from 'next/link'
import style from './ItemsResponsive.module.css'
import { Routes } from '@/routes/NavigationRoutes/routes.navigation'

interface Props {
    setView: React.Dispatch<React.SetStateAction<boolean>>
}

function ItemsResponsive({setView} : Props ) {
    return (
        <div className={style.containerPrincipal}>
            <input type="text" placeholder='Buscar...'/>
            <Link className={style.link} href={Routes.PROMOTIONS} onClick={() => setView(false)}>Promociones</Link>
            <Link className={style.link} href={Routes.PRODUCTS} onClick={() => setView(false)}>Productos</Link>
            <Link className={style.link} href={Routes.SUCURSALES} onClick={() => setView(false)}>Sucursales</Link>
            <Link className={style.link} href={Routes.PROFILE} onClick={() => setView(false)}>Perfil</Link>
            <Link className={style.link} href={Routes.CART} onClick={() => setView(false)}>Carrito</Link>
            <button className={style.button} onClick={() => setView(false)}>Cerrar</button>
        </div>
    )
}

export default ItemsResponsive