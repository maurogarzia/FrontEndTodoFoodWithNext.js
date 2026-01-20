import { IProducts } from "@/types/models/Product.model";
import { createEntityStore } from "@/utils/createEntityStore";


export const productStore = createEntityStore<IProducts>("active-product")