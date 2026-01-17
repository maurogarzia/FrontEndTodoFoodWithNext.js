import { IAddress } from "../../types/models/Address.model";
import { createEntityStore } from "../../utils/createEntityStore";

export const addressStore = createEntityStore<IAddress>()