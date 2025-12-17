"use client"
import style from './Buttons.module.css'

interface Props<T>{
    row: T,
    onEdit? : (row: T) => void
    onDelete? : (row: T) => void
}

function Buttons<T>({row, onEdit, onDelete} : Props<T>) {
    return (
        <div className={style.containerPrincipal}>
            {onEdit && (
                <button className={style.button} onClick={() => onEdit(row)}>
                    Editar
                </button>

            )}

            {onDelete && (
                <button className={style.button} onClick={() => onDelete(row)}>
                    Eliminar
                </button>
            )}
            
        </div>
    )
}

export default Buttons