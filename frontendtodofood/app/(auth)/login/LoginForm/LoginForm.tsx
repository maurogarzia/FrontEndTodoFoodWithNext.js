import Link from 'next/link'
import style from './LoginForm.module.css'
import { Routes } from '@/routes/NavigationRoutes/routes.navigation'

function LoginForm() {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Iniciar Sesión</p>

            <form action="" className={style.form}>
                <div className={style.data}>
                    <label className={style.label}>Nombre de usuario</label>
                    <input type="text" placeholder='JhonDoe@example.com'/>
                    <label className={style.label}>Contraseña</label>
                    <input type="text" placeholder='1234'/>
                </div>
                <div className={style.button}>
                    <button>Iniciar Sesión</button>
                </div>
                <div className={style.register}>
                    <p>No tienes cuenta? Registrate gratis -</p>
                    <Link className={style.link} href={Routes.REGISTER}>Aquí</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm