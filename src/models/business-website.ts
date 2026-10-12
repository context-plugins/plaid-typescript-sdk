import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Website associated with a business */
export type BusinessWebsite = {
  /** URL of the business website */
  url: string | null;
};

export const businessWebsiteSchema: Schema<BusinessWebsite> = s.object<BusinessWebsite>({
  url: s.nullable(s.string()),
});
