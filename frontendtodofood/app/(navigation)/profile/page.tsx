import style from './Profile.module.css'
import DataUser from './components/DataUser/DataUser'
import DataAccess from './components/DataAccess/DataAccess'
import { getByUsername } from '@/services/entities/users/users.service'
import { logout } from './logout'

async function getUser() {
    try {
        return await getByUsername()
    } catch (error) {
        logout()
    }
}


async function Profile() {

    const loginUser = await getUser()

    return (
        <div className={style.containerPrincipal}> 
            <DataUser loginUser={loginUser!}/>
            <DataAccess loginUser={loginUser!}/>
        </div>
    )
}

export default Profile