import { getAllBranches } from "@/services/entities/branche/branche.service"
import style from '../EntityStyle.module.css'
import CardBranch from "./components/CardBranch/CardBranch"


async function getData(){
    return await getAllBranches()
}

async function Branches() {

    const branches = await getData()

    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>Sucursales</p>

            <div className={style.cards}>
                {branches.map((branch) => 
                    <CardBranch key={branch.id} branch={branch}/>
                )}
            </div>
        </div>
    )
}

export default Branches