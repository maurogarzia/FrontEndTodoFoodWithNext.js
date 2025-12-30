'use client'

import { IPatchUser, IUser } from '@/types/models/Users.model'
import DataAccess from './components/DataAccess/DataAccess'
import DataUser from './components/DataUser/DataUser'
import style from './Profile.module.css'
import { modalStore } from '@/store/Modal/modal.store'
import Modal from '@/components/Modal/Modal'
import { useState } from 'react'
import { userStore } from '@/store/User/user.store'
import { ILocality } from '@/types/models/Locality.model'
import { patchUser, updatePassword } from '@/services/entities/users/users.service'
import { useRouter } from 'next/navigation'
import { IRequestAddress } from '@/types/models/Address.model'
import { createAddress } from '@/services/entities/address/address.service'
import { logout } from './logout'

interface ProfilePageProps{
    loginUser: IUser | undefined,
    localities: ILocality[]
}

function ProfilePage({loginUser, localities} : ProfilePageProps) {

    
    const {view, type} = modalStore()
    const [title, setTitle] = useState<string>('') 
    const [children, setChildren] = useState<React.ReactNode>()
    const {setActiveEntity, activeEntity} = userStore()   
    const router = useRouter()


    const handleSubmit = async(formData: FormData) => {

        if (!activeEntity) return

        if (type === '') return

        if (type === 'patch') {

            const user : IPatchUser = {
                id: activeEntity?.id,
                name: formData.get('name') as string || activeEntity?.name,
                lastname: formData.get('lastname') as string || activeEntity.lastname,
                phone: formData.get('phone') as string || String(activeEntity.phone),
                email: formData.get('email') as string || activeEntity.email,
                address: {
                    id: Number(formData.get('address')) || activeEntity.address.id
                },
                username: formData.get('username') as string || activeEntity.username,
                role: activeEntity.role
            }

            if (user.username !== activeEntity.username){
                await patchUser(user.id!, user)
                await logout()
                alert('Vuelve a loguearte')
            } else {

                await patchUser(user.id!, user)
                router.refresh()
            }

            return
        }

        if (type === 'changeAddress') {
            const address : IRequestAddress = {
                id : null,
                street: formData.get('street') as string,
                number: Number(formData.get('number')),
                locality: {
                    id: Number(formData.get('locality'))
                }
            }

            await createAddress(address)

            const user : IPatchUser = {
                id: activeEntity?.id,
                name: activeEntity?.name,
                lastname: activeEntity.lastname,
                phone: String(activeEntity.phone),
                email: activeEntity.email,
                address: {
                    id: address.id!
                },
                username: activeEntity.username,
                role: activeEntity.role
            } 

            await patchUser(user.id!, user)
            router.refresh()
            return
        }

        if (type === 'changePassword'){
            const oldPassword = String(formData.get('oldPassword') )
            const newPassword = String(formData.get('newPassword')) 
            await updatePassword(activeEntity.id, {oldPassword, newPassword})
            router.refresh()
        }

        return
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