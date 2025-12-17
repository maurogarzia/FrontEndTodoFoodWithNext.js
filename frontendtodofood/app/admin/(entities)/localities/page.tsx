import { getAllLocalities } from "@/services/entities/locality/locatlity.service"
import LocalitiesAdmin from "./LocalitiesAdmin"

async function getData() {
  return await getAllLocalities()
}

async function Localities() {

  const localities = await getData()

  return (
    <LocalitiesAdmin localities={localities}/>
  )
}

export default Localities