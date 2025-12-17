import { getAllCountries } from '@/services/entities/country/country.service'
import CountriesAdmin from './CountriesAdmin'

async function getData() {
  return getAllCountries()
}

async function Countries() {

  const countries = await getData()

  return (
    <CountriesAdmin countries={countries}/>
  )
}

export default Countries