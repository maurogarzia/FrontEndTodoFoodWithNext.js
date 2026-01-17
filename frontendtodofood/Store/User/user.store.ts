import { IUser } from "@/types/models/Users.model";
import { createEntityStore } from "@/utils/createEntityStore";

export const userStore = createEntityStore<IUser>()