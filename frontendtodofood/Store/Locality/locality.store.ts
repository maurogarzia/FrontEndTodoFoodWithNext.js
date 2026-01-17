import { ILocality } from "@/types/models/Locality.model";
import { createEntityStore } from "@/utils/createEntityStore";

export const localityStore = createEntityStore<ILocality>()