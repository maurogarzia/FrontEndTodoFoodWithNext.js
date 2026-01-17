import { ICategory } from "@/types/models/Category.model";
import { createEntityStore } from "@/utils/createEntityStore";

export const categoryStore = createEntityStore<ICategory>()