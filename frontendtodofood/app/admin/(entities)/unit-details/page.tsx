import { getAllUnitaryDetails } from "@/services/entities/unitaryDetails/unitaryDetails.service"
import UnitDetailsAdmin from "./UnitDetailsAdmin"

async function getData() {
  return await getAllUnitaryDetails()
}

async function UnitDetails() {

  const unitaryDetails = await getData()

  return (
    <UnitDetailsAdmin unitDetails={unitaryDetails}/>
  )
}

export default UnitDetails