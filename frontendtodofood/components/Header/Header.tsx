import style from './Header.module.css'

function Header() {
    return (
        <div className={style.containerPrincipal}>
            <h1>TodoFood</h1>
            <div className={style.items}>
                <p>Promociones</p>
                <p>Productos</p>
                <p>Sucursales</p>
            </div>

            <div className={style.search}>
                <input type="text" placeholder='Buscar' />
                <span className="material-symbols-outlined">search</span>
            </div>

            <div className={style.containerAccount}>
                <span className="material-symbols-outlined">account_circle</span>
            </div>
        </div>
    )
}

export default Header