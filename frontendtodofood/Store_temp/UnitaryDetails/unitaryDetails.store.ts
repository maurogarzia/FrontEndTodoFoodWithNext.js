import { IUnitaryDetails } from "@/types/models/UnitaryDetails.model";
import { createEntityStore } from "@/utils/createEntityStore";

export const unitaryDetailsStore = createEntityStore<IUnitaryDetails>()