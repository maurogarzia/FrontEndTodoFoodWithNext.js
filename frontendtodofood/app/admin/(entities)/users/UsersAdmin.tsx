"use client"

import { IUser } from '@/types/models/Users.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface UsersAdminProps{
    users: IUser[]
}

function UsersAdmin({users} : UsersAdminProps) {

    const columnUsers : TableColumn<IUser>[] = [
        {header: "Id" , accessor: 'id'},
        {header: "Nombre" , render: (user) => `${user.name} ${user.lastname}`},
        {header: "Email" , accessor: 'email'},
        {header: "Nombre de usuario" , accessor: 'username'},
        {header: "Teléfono" , render: (user) => user.phone? user.phone : '-'},
        {header: "Rol" , accessor: 'role'},
        {header: "Acciones" , render: (user) => 
            <Buttons row={user} onEdit={(selectedUser) => {}} onDelete={(id) => {}}/>
        },
        
    ]

    return (
        <div className={style.containerPrincipal}>

            <TitleAndButton title='USUARIOS' titleOfButton='Agregar usuario'/>

            <div className={style.table}>
                <TableAdmin data={users} columns={columnUsers}/>
            </div>
        </div>
    )
}

export default UsersAdmin