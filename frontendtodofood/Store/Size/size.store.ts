import { ISize } from "@/types/models/Size.model";
import { createEntityStore } from "@/utils/createEntityStore";

export const sizeStore = createEntityStore<ISize>()