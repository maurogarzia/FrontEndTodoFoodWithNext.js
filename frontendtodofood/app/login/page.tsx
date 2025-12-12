
import style from './Login.module.css'


async function Login() {

    

    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Iniciar Sesión</p>
            <form className={style.form}>
                <div className={style.data}>
                    <label>Usuario</label>
                    <input type="text" placeholder='JhonDoe@example.com'/>
                    <label htmlFor="">Contraseña</label>
                    <input type="text" placeholder='1234'/>
                </div>
                <div className={style.button}>
                    <button>Iniciar Sesion</button>
                </div>
                <div className={style.register}>
                    {/* Aca se supone que tocando en aqui te manda al register, pero no se si hacerlo un componente aparte o una page aparte */}
                    <p>No tienes cuenta? Registrate gratis aquí</p>
                </div>
            </form>
        </div>
    )
}

export default Login