import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntityScreeningHitUrls = {
  url: string;
};

export const entityScreeningHitUrlsSchema: Schema<EntityScreeningHitUrls> = s.object<EntityScreeningHitUrls>({
  url: s.string(),
});
