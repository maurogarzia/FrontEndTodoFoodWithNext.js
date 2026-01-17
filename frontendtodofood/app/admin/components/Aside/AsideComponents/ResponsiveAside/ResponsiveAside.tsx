import Link from 'next/link'
import style from './ResponsiveASide.module.css'
import { AdminRoutes } from '../../../../../../routes/AdminRoutes/routes.admin'

interface ResponsiveASideProps{
    setOpenAside: React.Dispatch<React.SetStateAction<boolean>>
}

function ResponsiveAside({setOpenAside} : ResponsiveASideProps) {

    return (
        <div className={style.containerPrincipal}>
            <Link className={style.link} href={AdminRoutes.COUNTRY} onClick={() => setOpenAside(false)}>País</Link>
            <Link className={style.link} href={AdminRoutes.PROVINCE} onClick={() => setOpenAside(false)}>Provincia</Link>
            <Link className={style.link} href={AdminRoutes.LOCALITY} onClick={() => setOpenAside(false)}>Localidad</Link>
            <Link className={style.link} href={AdminRoutes.ADDRESS} onClick={() => setOpenAside(false)}>Dirección</Link>
            <Link className={style.link} href={AdminRoutes.PRODUCTS} onClick={() => setOpenAside(false)}>Productos</Link>
            <Link className={style.link} href={AdminRoutes.PRODUCT_DETAIL} onClick={() => setOpenAside(false)}>Detalle Producto</Link>
            <Link className={style.link} href={AdminRoutes.PROMOTIONS} onClick={() => setOpenAside(false)}>Promociones</Link>
            <Link className={style.link} href={AdminRoutes.PROMOTION_DETAILS} onClick={() => setOpenAside(false)}>Detalle Promoción</Link>
            <Link className={style.link} href={AdminRoutes.UNIT_DETAILS} onClick={() => setOpenAside(false)}>Detalles Unitarios</Link>
            <Link className={style.link} href={AdminRoutes.IMAGES} onClick={() => setOpenAside(false)}>Imágenes</Link>
            <Link className={style.link} href={AdminRoutes.USERS} onClick={() => setOpenAside(false)}>Usuarios</Link>
            <Link className={style.link} href={AdminRoutes.BRANCHES} onClick={() => setOpenAside(false)}>Sucursales</Link>
            <Link className={style.link} href={AdminRoutes.SIZES} onClick={() => setOpenAside(false)}>Tamaños</Link>
            <Link className={style.link} href={AdminRoutes.CATEGORIES} onClick={() => setOpenAside(false)}>Categorías</Link>
            <button className={style.button} onClick={() => setOpenAside(false)}>Cerrar</button>
        </div>
    )
}

export default ResponsiveAside