import Link from 'next/link'
import style from '../../Form.module.css'
import { Routes } from '@/routes/NavigationRoutes/routes.navigation'

function RegisterForm() {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Registrarse</p>

            <form className={style.form}>
                <div className={style.data}>
                    <label className={style.label}>Nombre</label>
                    <input type="text" placeholder='Jhon'/>
                    <label className={style.label}>Apellido</label>
                    <input type="text" placeholder='Doe'/>
                    <label className={style.label}>Email</label>
                    <input type="text" placeholder='JhonDoe@example.com'/>
                    <label className={style.label}>Nombre de usuario</label>
                    <input type="text" placeholder='JhonDoe_17'/>
                    <label className={style.label}>Contraseña</label>
                    <input type="text" placeholder='1234'/>
                </div>
                <div className={style.button}>
                    <button>Registrarse</button>
                </div>
                <div className={style.registerAndRegister}>
                    <p>Ya tienes cuenta? Logueate -</p>
                    <Link className={style.link} href={Routes.LOGIN}>Aquí</Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm