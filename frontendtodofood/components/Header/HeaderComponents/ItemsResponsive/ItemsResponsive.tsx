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
            <Link className={style.link} href={Routes.PROMOTIONS}>Promociones</Link>
            <Link className={style.link} href={Routes.PRODUCTS}>Productos</Link>
            <Link className={style.link} href={Routes.SUCURSALES}>Sucursales</Link>
            <Link className={style.link} href={Routes.PROFILE}>Perfil</Link>
            <button className={style.button} onClick={() => setView(false)}>Cerrar</button>
        </div>
    )
}

export default ItemsResponsive