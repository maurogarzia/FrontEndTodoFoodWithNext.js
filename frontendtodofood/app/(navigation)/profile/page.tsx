import style from './Profile.module.css'
import DataUser from './components/DataUser/DataUser'
import DataAccess from './components/DataAccess/DataAccess'
import { getByUsername } from '@/services/entities/users/users.service'
import { logout } from './logout'
import ProfilePage from './ProfilePage'
import { getAllLocalities } from '@/services/entities/locality/locatlity.service'


async function getUser() {
    try {
        return await getByUsername()
    } catch (error) {
        logout()
    }
}

async function getData() {
    return getAllLocalities()
}

async function Profile() {

    const loginUser = await getUser()
    const localities = await getData()

    return (
        <ProfilePage loginUser={loginUser} localities={localities}/>
    )
}

export default Profile