"use client"
import { IAddress } from '@/types/models/Address.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'

interface AddressAdminProps{
    addresses: IAddress[]
}

function AddressAdmin({addresses} : AddressAdminProps) {

    const columnAddresses : TableColumn<IAddress>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Calle', accessor: 'street'},
        {header: 'Número', accessor: 'number'},
        {header: 'Localidad', render: (address) => address.locality.name},
        {header: 'Acciones', render: (address) => 
            <Buttons row={address} onEdit={(selectedAddress) => {}} onDelete={(id) => {}}/>
        },
    ]

    return (
        <div className={style.containerPrincipal}>

            <TitleAndButton title='DIRECCIONES' titleOfButton='Agregar dirección'/>

            <div className={style.table}>
                <TableAdmin data={addresses} columns={columnAddresses}/>
            </div>
        </div>
    )
}

export default AddressAdmin