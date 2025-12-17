import { getAllPromotionDetails } from "@/services/entities/promotionDetails/promotionDetails.service"
import PromotionDetailsAdmin from "./PromotionDetailsAdmin"

async function getData(){
  return await getAllPromotionDetails()
}

async function PromotionDetails() {

  const promotionDetails = await getData()

  return (
    <PromotionDetailsAdmin promotionDetails={promotionDetails}/>
  )
}

export default PromotionDetails