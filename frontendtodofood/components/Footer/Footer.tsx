import Link from 'next/link'
import style from './Footer.module.css'
import { Routes } from '@/routes/NavigationRoutes/routes.navigation'

function Footer() {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>TodoFood</p>
            <div className={style.column}>
                <p className={style.subtitle}>Conócenos</p>
                <Link href={Routes.SUCURSALES} className={style.link}>Locales</Link>
                <p>Sugerencias y Reclamos</p>
                <p>Términos y condiciones</p>

            </div>
            <div className={style.column}>
                <p  className={style.subtitle}>Redes Sociales</p>
                <div className={style.social}>
                    <span className="fab fa-instagram"></span>
                    <p>@todofood</p>
                </div>
                <div className={style.social}>
                    <span className="fab fa-facebook"></span>
                    <p>todoFood</p>
                </div>
                <div className={style.social}>
                    <span className="fab fa-whatsapp"></span>
                    <p>2616938666</p>
                </div>
            </div>
            <div className={style.column}>
                <p className={style.subtitle}>Mi cuenta</p>
                <Link href={Routes.LOGIN} className={style.link}>Iniciar Sesión</Link>
                <Link href={Routes.PROFILE} className={style.link}>Perfil</Link>
            </div>
        </div>
    )
}

export default Footer