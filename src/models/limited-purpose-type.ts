import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LimitedPurposeType = {
  RentMortgage: "RENT_MORTGAGE",
} as const;
export type LimitedPurposeType = (typeof LimitedPurposeType)[keyof typeof LimitedPurposeType] | (string & {});

export const limitedPurposeTypeSchema: EnumSchema<LimitedPurposeType> =
  s.enumOf<LimitedPurposeType>(LimitedPurposeType);
