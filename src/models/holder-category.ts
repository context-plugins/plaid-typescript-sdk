import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the account's categorization as either a personal or a business account. This field is
 * currently in beta; to request access, contact your account manager.
 */
export const HolderCategory = {
  Business: "business",
  Personal: "personal",
  Unrecognized: "unrecognized",
} as const;
export type HolderCategory = (typeof HolderCategory)[keyof typeof HolderCategory] | (string & {});

export const holderCategorySchema: EnumSchema<HolderCategory> = s.enumOf<HolderCategory>(HolderCategory);
