"use client"

import { ICountry } from '@/types/models/Country,model'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import style from '../EntityAdmin.module.css'
import Buttons from '../../components/Buttons/Buttons'
import { countryStore } from '@/store/Country/country.store'
import { modalStore } from '@/store/Modal/modal.store'
import Modal from '@/components/Modal/Modal'
import { createCountry, deleteCountry, updatedCountry } from '@/services/entities/country/country.service'
import ChildrenCountry from './components/ChildrenCountries'
import { useRouter } from 'next/navigation'


interface CountriesAdminProps {
  countries : ICountry[]
}


function CountriesAdmin({countries} : CountriesAdminProps) {

  const {setActiveEntity, activeEntity} = countryStore()
  const {view, setView} = modalStore()

  const router = useRouter()

  const countryColumns: TableColumn<ICountry>[] = [
    {header: "Id", accessor: 'id'},
    {header: "Nombre", accessor: "name"},
    {header: "Acciones",
      render: (country) => (
        <Buttons row={country}
          onEdit={(country) => {
            setActiveEntity(country)
            setView(true)
          }} 
          onDelete={async(country) => {
            deleteCountry(country.id!)
            router.refresh()
          }}/>
      )
    }
  ]

  const children = <ChildrenCountry/>

  const handleSubmit = async(formData : FormData) => {

    const country: ICountry = {
      id: activeEntity ?  activeEntity.id : null,
      name: formData.get("name") as string
    } 

    if (activeEntity) {

      await updatedCountry(country, activeEntity.id!)
      router.refresh()
    } else {
      await createCountry(country)
      router.refresh()
    }
    setView(false)
  }

  // Funcion para abrir modal para crear
  const onCreate = () => {
    setView(true)
    setActiveEntity(null)
  }


  return (
    <div className={style.containerPrincipal}>

      {view && 
        <div className={style.modalBackdrop}>
            <Modal
              title={activeEntity ? 'Editar País' : 'Crear País'}
              setActiveEntity={setActiveEntity}
              onSubmit={handleSubmit}
              >
                {children}
              </Modal>
        </div>
      }

      <TitleAndButton title='PAÍSES' titleOfButton='Agregar Países' onCreate={onCreate}/>

      <div className={style.table}>
        <TableAdmin data={countries} columns={countryColumns}/>
      </div>
    </div>
  )
}

export default CountriesAdmin