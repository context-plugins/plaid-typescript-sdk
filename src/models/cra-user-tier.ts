import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraUserTier = {
  Free: "free",
  Paid: "paid",
} as const;
export type CraUserTier = (typeof CraUserTier)[keyof typeof CraUserTier] | (string & {});

export const craUserTierSchema: EnumSchema<CraUserTier> = s.enumOf<CraUserTier>(CraUserTier);
