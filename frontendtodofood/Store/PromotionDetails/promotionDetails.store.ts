import { IPromotionDetails } from "../../types/models/PromotionDetails.model";
import { createEntityStore } from "../../utils/createEntityStore";

export const promotionDetailsStore = createEntityStore<IPromotionDetails>()