'use client'

import { IUser } from '@/types/models/Users.model'
import DataAccess from './components/DataAccess/DataAccess'
import DataUser from './components/DataUser/DataUser'
import style from './Profile.module.css'
import { modalStore } from '@/store/Modal/modal.store'
import Modal from '@/components/Modal/Modal'
import { useEffect, useState } from 'react'
import { userStore } from '@/store/User/user.store'
import { ILocality } from '@/types/models/Locality.model'

interface ProfilePageProps{
    loginUser: IUser | undefined,
    localities: ILocality[]
}

function ProfilePage({loginUser, localities} : ProfilePageProps) {

    
    const {view, setView} = modalStore()
    const [title, setTitle] = useState<string>('') 
    const [children, setChildren] = useState<React.ReactNode>()
    const {setActiveEntity} = userStore()   


    const handleSubmit = () => {

    }

    return (
        <div className={style.containerPrincipal}>
            <DataUser loginUser={loginUser!} />
            <DataAccess loginUser={loginUser!} setTitle={setTitle} setChildren={setChildren} localities={localities}/>
            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                        title={title}
                        children={children}
                        setActiveEntity={setActiveEntity}
                        onSubmit={handleSubmit}
                    />
                </div>
            }
        </div>
    )
}

export default ProfilePage