import Image from 'next/image'
import style from './Profile.module.css'
import DataUser from './components/DataUser/DataUser'
import DataAccess from './components/DataAccess/DataAccess'

function Profile() {
  return (
    <div className={style.containerPrincipal}> 
      <DataUser/>
      <DataAccess/>
    </div>
  )
}

export default Profile