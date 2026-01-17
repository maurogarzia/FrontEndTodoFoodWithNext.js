import { IProvince } from "../../types/models/Province.model";
import { createEntityStore } from "../../utils/createEntityStore";

export const provinceStore = createEntityStore<IProvince>()