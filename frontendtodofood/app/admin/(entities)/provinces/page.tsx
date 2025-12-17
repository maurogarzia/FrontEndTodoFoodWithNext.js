import { getAllProvinces } from "@/services/entities/province/province.service"
import ProvincesAdmin from "./ProvincesAdmin"

async function getData() {
  return await getAllProvinces()
}

async function Provinces() {

  const provinces = await getData()

  return (
    <ProvincesAdmin/>
  )
}

export default Provinces