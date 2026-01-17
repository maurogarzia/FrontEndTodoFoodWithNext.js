import { getAllPromotionDetails } from "@/services/entities/promotionDetails/promotionDetails.service"
import PromotionDetailsAdmin from "./PromotionDetailsAdmin"
import { getAllPromotions } from "@/services/entities/promotion/promotion.service"
import { getAllUnitaryDetails } from "@/services/entities/unitaryDetails/unitaryDetails.service"

async function getData(){
  const promotionDetails = await getAllPromotionDetails()
  const promotions = await getAllPromotions()
  const unitaryDetails = await getAllUnitaryDetails()

  return {promotionDetails, promotions, unitaryDetails}
}

async function PromotionDetails() {

  const {promotionDetails, promotions, unitaryDetails} = await getData()

  return (
    <PromotionDetailsAdmin promotionDetails={promotionDetails} unitaryDetails={unitaryDetails} promotions={promotions}/>
  )
}

export default PromotionDetails