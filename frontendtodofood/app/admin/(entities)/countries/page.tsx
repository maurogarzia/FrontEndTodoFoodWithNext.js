import { getAllCountries } from '@/services/entities/country/country.service'
import style from './CountriesAdmin.module.css'

async function getData() {
  return getAllCountries()
}


async function Countries() {

  const countries = await getData()

  return (
    <div className={style.containerPrincipal}>
      <h1 className={style.title}>Países</h1>
      <div className={style.addButton}>
        <button>Agregar Países</button>
      </div>
    </div>
  )
}

export default Countries