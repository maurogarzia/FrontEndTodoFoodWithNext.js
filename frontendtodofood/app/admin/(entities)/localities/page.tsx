import { getAllLocalities } from "../../../../services/entities/locality/locatlity.service"
import LocalitiesAdmin from "./LocalitiesAdmin"
import { getAllProvinces } from "../../../../services/entities/province/province.service"

async function getData() {
  const localities = await getAllLocalities()
  const provinces = await getAllProvinces()
  return {localities, provinces}
}

async function Localities() {

  const {localities, provinces} = await getData()

  return (
    <LocalitiesAdmin localities={localities} provinces={provinces}/>
  )
}

export default Localities