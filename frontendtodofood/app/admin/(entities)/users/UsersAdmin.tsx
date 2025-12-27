"use client"

import { IRequestUser, IUser } from '@/types/models/Users.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { IAddress } from '@/types/models/Address.model'
import { modalStore } from '@/store/Modal/modal.store'
import { userStore } from '@/store/User/user.store'
import { useRouter } from 'next/navigation'
import { deletedUser } from '@/services/entities/users/users.service'
import { Role } from '@/types/enums/Rol'
import Modal from '@/components/Modal/Modal'
import ChildrenUsers from './components/ChildrenUsers'

interface UsersAdminProps{
    users: IUser[],
    addresses: IAddress[]
}

function UsersAdmin({users, addresses} : UsersAdminProps) {

    const {setView, view} = modalStore()
    const {setActiveEntity, activeEntity} = userStore()
    const router = useRouter()

    const columnUsers : TableColumn<IUser>[] = [
        {header: "Id" , accessor: 'id'},
        {header: "Nombre" , render: (user) => `${user.name} ${user.lastname}`},
        {header: "Email" , accessor: 'email'},
        {header: "Nombre de usuario" , accessor: 'username'},
        {header: "Teléfono" , render: (user) => user.phone? user.phone : '-'},
        {header: "Rol" , accessor: 'role'},
        {header: "Acciones" , render: (user) => 
            <Buttons row={user} 
            onEdit={(selectedUser) => {
                setView(true)
                setActiveEntity(selectedUser)
            }} 
            onDelete={async(selectedUser) => {
                await deletedUser(selectedUser.id)
                router.refresh()
            }}/>
        },
        
    ]

    const handleSubmit = (formData : FormData) => {
        const user : IRequestUser = {
            id: activeEntity ? activeEntity.id : null,
            name: formData.get('name') as string,
            lastname: formData.get('lastname') as string,
            phone: Number(formData.get('phone')),
            password: activeEntity?.password || '',
            address: {
                id: Number(formData.get('address'))
            },
            username: formData.get('username') as string,
            role: formData.get('role') as Role,
            email: formData.get('email') as string
        }
    }

    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    const children = <ChildrenUsers addresses={addresses}/>

    return (
        <div className={style.containerPrincipal}>

            {view && 
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Usuario' : 'Crear usuario'}
                        onSubmit={handleSubmit}
                        setActiveEntity={setActiveEntity}
                        children={children}
                    />
                </div>
            }

            <TitleAndButton title='USUARIOS' titleOfButton='Agregar usuario' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={users} columns={columnUsers}/>
            </div>
        </div>
    )
}

export default UsersAdmin