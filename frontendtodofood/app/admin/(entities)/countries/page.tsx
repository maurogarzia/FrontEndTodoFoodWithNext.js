import { getAllCountries } from '@/services/entities/country/country.service'
import style from './CountriesAdmin.module.css'
import TableAdmin from '../../components/TableAdmin/TableAdmin'
import TitleAndButton from '../../components/TitleAndButton/TitleAndButton'

async function getData() {
  return getAllCountries()
}


async function Countries() {

  const countries = await getData()
  const headerCountry = [
    "id", "name"," Opciones"
  ]


  return (
    <div className={style.containerPrincipal}>

      <TitleAndButton title='PAÍSES' titleOfButton='Agregar Países'/>

      <div className={style.table}>
        <TableAdmin/>
      </div>
    </div>
  )
}

export default Countries