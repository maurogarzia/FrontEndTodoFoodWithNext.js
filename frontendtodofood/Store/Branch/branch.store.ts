import { IBranch } from "../../types/models/Branch.model";
import { createEntityStore } from "../../utils/createEntityStore";

export const branchStore = createEntityStore<IBranch>()