import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const YieldRateType = {
  Coupon: "coupon",
  CouponEquivalent: "coupon_equivalent",
  Discount: "discount",
  Yield: "yield",
} as const;
export type YieldRateType = (typeof YieldRateType)[keyof typeof YieldRateType] | (string & {});

export const yieldRateTypeSchema: EnumSchema<YieldRateType> = s.enumOf<YieldRateType>(YieldRateType);
