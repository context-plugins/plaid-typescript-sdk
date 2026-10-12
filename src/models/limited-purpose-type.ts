import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A specific use case for a limited purpose checking account. Limited purpose checking accounts
 * will reject or return ACH transactions that aren't for eligible use cases. For example, a
 * `RENT_MORTGAGE` limited purpose checking account will reject ACH transactions that are not
 * specifically rent or mortgage payments.
 */
export const LimitedPurposeType = {
  RentMortgage: "RENT_MORTGAGE",
} as const;
export type LimitedPurposeType = (typeof LimitedPurposeType)[keyof typeof LimitedPurposeType] | (string & {});

export const limitedPurposeTypeSchema: EnumSchema<LimitedPurposeType> =
  s.enumOf<LimitedPurposeType>(LimitedPurposeType);
