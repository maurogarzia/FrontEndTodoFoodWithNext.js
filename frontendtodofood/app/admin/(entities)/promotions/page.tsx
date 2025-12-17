import { getAllPromotions } from "@/services/entities/promotion/promotion.service"
import PromotionsAdmin from "./PromotionsAdmin"

async function getData() {
  return await getAllPromotions()
}

async function Promotions() {

  const promotions = await getData()

  return (
    <PromotionsAdmin promotions={promotions}/>
  )
}

export default Promotions