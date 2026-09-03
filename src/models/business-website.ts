import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessWebsite = {
  url: string | null;
};

export const businessWebsiteSchema: Schema<BusinessWebsite> = s.object<BusinessWebsite>({
  url: s.nullable(s.string()),
});
