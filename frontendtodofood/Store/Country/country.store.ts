import { ICountry } from "../../types/models/Country,model";
import { createEntityStore } from "../../utils/createEntityStore";

export const countryStore = createEntityStore<ICountry>()