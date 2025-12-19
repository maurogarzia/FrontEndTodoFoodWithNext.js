import { IPromotion } from "@/types/models/Promotions.model";
import { createEntityStore } from "@/utils/createEntityStore";

export const promotionStore = createEntityStore<IPromotion>()