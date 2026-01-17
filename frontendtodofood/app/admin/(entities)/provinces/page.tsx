import { getAllProvinces } from "@/services/entities/province/province.service"
import ProvincesAdmin from "./ProvincesAdmin"
import { getAllCountries } from "@/services/entities/country/country.service"

async function getData() {
  const provinces = await getAllProvinces()
  const countries = await getAllCountries()

  return {provinces, countries}
}

async function Provinces() {

  const {provinces,  countries} = await getData()

  return (
    <ProvincesAdmin provinces={provinces} countries={countries}/>
  )
}

export default Provinces