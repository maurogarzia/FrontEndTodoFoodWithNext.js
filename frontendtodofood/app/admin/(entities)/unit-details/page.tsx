import { getAllUnitaryDetails } from "@/services/entities/unitaryDetails/unitaryDetails.service"
import UnitDetailsAdmin from "./UnitDetailsAdmin"
import { getAllProductsDetails } from "@/services/entities/productDetails/productDetails.service"

async function getData() {
  const unitDetails = await getAllUnitaryDetails()
  const productDetails = await getAllProductsDetails()

  return {unitDetails, productDetails}
}

async function UnitDetails() {

  const {unitDetails, productDetails} = await getData()

  return (
    <UnitDetailsAdmin unitDetails={unitDetails} productDetails={productDetails}/>
  )
}

export default UnitDetails