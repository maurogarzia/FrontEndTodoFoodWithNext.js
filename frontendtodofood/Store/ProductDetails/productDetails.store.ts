import { IProductsDetails } from "@/types/models/ProductDetail.model";
import { createEntityStore } from "@/utils/createEntityStore";

export const productDetailsStore = createEntityStore<IProductsDetails>()