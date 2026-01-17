import { IImage } from "../../types/models/Image.model";
import { createEntityStore } from "../../utils/createEntityStore";

export const imageStore = createEntityStore<IImage>()