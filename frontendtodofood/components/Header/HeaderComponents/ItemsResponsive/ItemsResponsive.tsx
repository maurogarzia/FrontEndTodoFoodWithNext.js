import style from './ItemsResponsive.module.css'

interface Props {
    setView: React.Dispatch<React.SetStateAction<boolean>>
}

function ItemsResponsive({setView} : Props ) {
    return (
        <div className={style.containerPrincipal}>
            <input type="text" placeholder='Buscar...'/>
            <p>Promociones</p>
            <p>Productos</p>
            <p>Sucursales</p>
            <button className={style.button} onClick={() => setView(false)}>Cerrar</button>
        </div>
    )
}

export default ItemsResponsive