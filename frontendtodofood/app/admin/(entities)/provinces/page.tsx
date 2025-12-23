import { getAllProvinces } from "@/services/entities/province/province.service"
import ProvincesAdmin from "./ProvincesAdmin"
import { getAllCountries } from "@/services/entities/country/country.service"

async function getData() {
  return await getAllProvinces()
}

async function Provinces() {

  const provinces = await getData()

  return (
    <ProvincesAdmin provinces={provinces} />
  )
}

export default Provinces