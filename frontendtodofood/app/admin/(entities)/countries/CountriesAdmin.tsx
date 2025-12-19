"use client"

import { ICountry } from '@/types/models/Country,model'
import TableAdmin, { TableColumn } from '../../components/TableAdmin/TableAdmin'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'
import style from '../EntityAdmin.module.css'
import Buttons from '../../components/Buttons/Buttons'
import { createEntityStore } from '@/utils/createEntityStore'
import { countryStore } from '@/Store/Country/country.store'

interface CountriesAdminProps {
  countries : ICountry[]
}


function CountriesAdmin({countries} : CountriesAdminProps) {

  const {setActiveEntity, activeEntity} = countryStore()

  const countryColumns: TableColumn<ICountry>[] = [
    {header: "Id", accessor: 'id'},
    {header: "Nombre", accessor: "name"},
    {header: "Acciones",
      render: (country) => (
        <Buttons row={country}
          onEdit={(country) => {
            setActiveEntity(country)
            console.log(activeEntity);
          }} 
          onDelete={(u) => {}}/>
      )
    }
  ]


  return (
    <div className={style.containerPrincipal}>

      <TitleAndButton title='PAÍSES' titleOfButton='Agregar Países'/>

      <div className={style.table}>
        <TableAdmin data={countries} columns={countryColumns}/>
      </div>
    </div>
  )
}

export default CountriesAdmin