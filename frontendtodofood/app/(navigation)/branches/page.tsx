import { getAllBranches } from "@/services/entities/branche/branche.service"
import style from '../EntityStyle.module.css'


async function getData(){
    return await getAllBranches()
}

function Branches() {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Sucursales</p>
        </div>
    )
}

export default Branches