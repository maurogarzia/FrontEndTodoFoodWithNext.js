import { getAllPromotionDetails } from "../../../../services/entities/promotionDetails/promotionDetails.service"
import SelectedPromotion from "./SelectedPromotion"

async function getData() {
    return await getAllPromotionDetails()
}

async function SelectedPromotionPage() {

    const promotionDetails = await getData()

    return <SelectedPromotion promotionDetails={promotionDetails}/>
}

export default SelectedPromotionPage