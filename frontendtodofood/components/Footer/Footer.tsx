import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>TodoFood</p>
            <div className={style.column}>
                <p className={style.subtitle}>Conócenos</p>
                <p>Locales</p>
                <p>Franquicias</p>
                <p>Sugerencias y Reclamos</p>
                <p>Términos y condiciones</p>

            </div>
            <div className={style.column}>
                <p  className={style.subtitle}>Redes Sociales</p>
                <p>@todofood</p>
                <p>todoFood</p>
            </div>
            <div className={style.column}>
                <p  className={style.subtitle}>Mi cuenta</p>
                <p>Inicar Sesión</p>
                <p>Pedir</p>
            </div>
        </div>
    )
}

export default Footer