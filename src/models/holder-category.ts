import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HolderCategory = {
  Business: "business",
  Personal: "personal",
  Unrecognized: "unrecognized",
} as const;
export type HolderCategory = (typeof HolderCategory)[keyof typeof HolderCategory] | (string & {});

export const holderCategorySchema: EnumSchema<HolderCategory> = s.enumOf<HolderCategory>(HolderCategory);
