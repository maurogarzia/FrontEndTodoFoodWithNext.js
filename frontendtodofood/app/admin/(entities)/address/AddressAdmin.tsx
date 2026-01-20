"use client"
import { IAddress, IRequestAddress } from '@/types/models/Address.model'
import style from '../EntityAdmin.module.css'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import Buttons from '../../components/Buttons/Buttons'
import { addressStore } from '@/store/Address/address.store'
import { modalStore } from '@/store/Modal/modal.store'
import { createAddress, deleteAddress, updatedAddress } from '@/services/entities/address/address.service'
import { useRouter } from 'next/navigation'
import { ILocality } from '@/types/models/Locality.model'
import ChildrenAddress from './components/ChildrenAddress'
import Modal from '@/components/Modal/Modal'

interface AddressAdminProps{
    addresses: IAddress[],
    localities: ILocality[]
}

function AddressAdmin({addresses, localities} : AddressAdminProps) {

    const {setActiveEntity, activeEntity} = addressStore()
    const {view, setView} = modalStore()
    const router = useRouter()

    const columnAddresses : TableColumn<IAddress>[] = [
        {header: 'Id', accessor: 'id'},
        {header: 'Calle', accessor: 'street'},
        {header: 'Número', accessor: 'number'},
        {header: 'Localidad', render: (address) => address.locality.name},
        {header: 'Acciones', render: (address) => 
            <Buttons row={address} 
            onEdit={(selectedAddress) => {
                setActiveEntity(selectedAddress)
                setView(true)
            }} 
            onDelete={async (selectedAddress) => {
                await deleteAddress(selectedAddress.id)
                router.refresh()
            }}/>
        },
    ]

    const handleSubmit = async(formData : FormData) => {
        
        const address : IRequestAddress = {
            id : activeEntity ? activeEntity.id : null,
            street: formData.get("street") as string,
            number: Number(formData.get("number")),
            locality : {
                id: Number(formData.get('locality'))
            }
        }

        if (activeEntity) {
            await updatedAddress(address, address.id!)
            router.refresh()
        } else {
            await createAddress(address)
            router.refresh()
        }
    }

    const onCreate = () => {
        setView(true)
        setActiveEntity(null)
    }

    const children = <ChildrenAddress localities={localities}/>

    return (
        <div className={style.containerPrincipal}>

            {view &&
                <div className={style.modalBackdrop}>
                    <Modal
                        title={activeEntity ? 'Editar Dirección' : 'Crear Dirección'}
                        onSubmit={handleSubmit}
                        setActiveEntity={setActiveEntity}
                    >
                        {children}
                    </Modal>
                </div>

            }

            <TitleAndButton title='DIRECCIONES' titleOfButton='Agregar dirección' onCreate={onCreate}/>

            <div className={style.table}>
                <TableAdmin data={addresses} columns={columnAddresses}/>
            </div>
        </div>
    )
}

export default AddressAdmin