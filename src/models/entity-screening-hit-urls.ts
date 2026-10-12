import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** URLs associated with the entity screening hit */
export type EntityScreeningHitUrls = {
  /** An 'http' or 'https' URL (must begin with either of those). */
  url: string;
};

export const entityScreeningHitUrlsSchema: Schema<EntityScreeningHitUrls> = s.object<EntityScreeningHitUrls>({
  url: s.string(),
});
