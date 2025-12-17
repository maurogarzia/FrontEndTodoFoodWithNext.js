import Aside from "./components/Aside/Aside"
import style from './Admin.module.css'

interface Props {
    children: React.ReactNode
}

async function AdminLayout({children} : Props) {
    return (
        <div className={style.containerLayout}>
            <Aside/>
            {children}
        </div>
    )
}

export default AdminLayout