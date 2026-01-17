import { getByUsername } from '@/services/entities/users/users.service'
import { logout } from './logout'
import ProfilePage from './ProfilePage'
import { getAllLocalities } from '@/services/entities/locality/locatlity.service'
import { getToken } from '@/utils/getToken'


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
    const token = await getToken()
    console.log(token);
    

    return (
        <ProfilePage loginUser={loginUser} localities={localities}/>
    )
}

export default Profile