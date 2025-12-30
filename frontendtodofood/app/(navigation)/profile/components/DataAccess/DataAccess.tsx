"use client"

import { IUser } from '@/types/models/Users.model'
import style from './DataAccess.module.css'
import { modalStore } from '@/store/Modal/modal.store'
import ChildrenChangePassword from '../Childrens/ChildrenChangePassword'
import ChildrenDataAcces from '../Childrens/ChildrenDataAcces'
import ChildrenData from '../Childrens/ChildrenData'
import { ReactNode } from 'react'
import ChildrenAddress from '../Childrens/ChildrenAddress'
import { userStore } from '@/store/User/user.store'
import { ILocality } from '@/types/models/Locality.model'

interface DataAccessProps{
    loginUser: IUser
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setChildren: React.Dispatch<React.SetStateAction<ReactNode>>
    localities: ILocality[]
}

function DataAccess({loginUser, setTitle, setChildren, localities}: DataAccessProps) {

    const {setView, setType} = modalStore()
    const {setActiveEntity} = userStore()

    const handleOpen = (title: string, children: React.ReactElement, type: string) => {
        setView(true) // Abre el modal
        setTitle(title) // Pone el titulo al modal
        setChildren(children) // Seteo el children
        setActiveEntity(loginUser) // Seteo el usuario del perfil
        setType(type) // typo de modal que se va a ejecutar
    }

    const childrenPassword = <ChildrenChangePassword/>
    const childrenData = <ChildrenData/>
    const childrenDataAccess = <ChildrenDataAcces/>
    const childrenAddress = <ChildrenAddress localities={localities}/>

    return (
        <div className={style.dataAccess}>
            
                
                <div className={style.paragraph}>
                <p className={style.title}>
                    Tus Datos 
                    <button onClick={() => handleOpen('Editar datos personales', childrenData, 'patch')}>Editar</button>
                </p>
                <p>Nombre: {loginUser.name}</p>
                <p>Apellido: {loginUser.lastname}</p>
                <p>Teléfono: {loginUser.phone ? loginUser.phone : 'Sin teléfono agregado'}</p>
                </div>

                <div className={style.paragraph}>
                <p className={style.title}>
                    Dirección
                    <button onClick={() => handleOpen('Editar dirección', childrenAddress, 'changeAddress')}>Editar</button>
                </p>
                <div>{loginUser.address ? 
                    (<p>{loginUser.address.street} {loginUser.address.number} ({loginUser.address.locality.name})</p> ) 
                    :
                    ('Sin direcciones agregadas')}
                </div>
                </div>

                <div className={style.paragraph}>
                    <p className={style.title}>
                        Datos de acceso
                        <button onClick={() => handleOpen('Editar datos de acceso', childrenDataAccess, 'patch')}>Editar</button>
                    </p>
                    <p>Email: {loginUser.email}</p>
                    <p>Nombre de usuario: {loginUser.username}</p>
                    <div className={style.item}>
                        <p>Contraseña: </p>
                        <button onClick={() => handleOpen('Cambiar contraseña', childrenPassword, 'changePassword')}>Cambiar contraseña</button>
                    </div>
                </div>

            
        </div>
    )
}

export default DataAccess