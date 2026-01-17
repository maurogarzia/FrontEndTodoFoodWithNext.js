import { getAllPromotions } from "@/services/entities/promotion/promotion.service"
import PromotionsAdmin from "./PromotionsAdmin"
import { getAllImages } from "@/services/entities/images/images.service"

async function getData() {
  const promotions = await getAllPromotions()
  const images = await getAllImages()

  return {promotions, images}
}

async function Promotions() {

  const {promotions, images} = await getData()

  return (
    <PromotionsAdmin promotions={promotions} images={images}/>
  )
}

export default Promotions