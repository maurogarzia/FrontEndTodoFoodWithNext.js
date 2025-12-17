import Link from 'next/link'
import style from './Aside.module.css'
import { AdminRoutes } from '@/routes/AdminRoutes/routes.admin'

function Aside() {
    return (
        <div className={style.containerPrincipal}>
            <Link className={style.link} href={AdminRoutes.COUNTRY}>País</Link>
            <Link className={style.link} href={AdminRoutes.PROVINCE}>Provincia</Link>
            <Link className={style.link} href={AdminRoutes.LOCALITY}>Localidad</Link>
            <Link className={style.link} href={AdminRoutes.ADDRESS}>Dirección</Link>
            <Link className={style.link} href={AdminRoutes.PRODUCTS}>Productos</Link>
            <Link className={style.link} href={AdminRoutes.PRODUCT_DETAIL}>Detalle Producto</Link>
            <Link className={style.link} href={AdminRoutes.PROMOTIONS}>Promociones</Link>
            <Link className={style.link} href={AdminRoutes.PROMOTION_DETAILS}>Detalle Promoción</Link>
            <Link className={style.link} href={AdminRoutes.UNIT_DETAILS}>Detalles Unitarios</Link>
            <Link className={style.link} href={AdminRoutes.IMAGES}>Imágenes</Link>
            <Link className={style.link} href={AdminRoutes.USERS}>Usuarios</Link>
            <Link className={style.link} href={AdminRoutes.BRANCHES}>Sucursales</Link>
            <Link className={style.link} href={AdminRoutes.SIZES}>Tamaños</Link>
            <Link className={style.link} href={AdminRoutes.CATEGORIES}>Categorías</Link>
        </div>
    )
}

export default Aside