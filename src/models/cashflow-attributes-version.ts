import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of cashflow attributes. Required if using Cash Flow Insights. */
export const CashflowAttributesVersion = {
  V10: "v1.0",
  V20: "v2.0",
  Cfi1: "CFI1",
} as const;
export type CashflowAttributesVersion =
  | (typeof CashflowAttributesVersion)[keyof typeof CashflowAttributesVersion]
  | (string & {});

export const cashflowAttributesVersionSchema: EnumSchema<CashflowAttributesVersion> =
  s.enumOf<CashflowAttributesVersion>(CashflowAttributesVersion);
