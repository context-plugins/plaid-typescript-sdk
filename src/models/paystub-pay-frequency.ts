import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaystubPayFrequency = {
  Monthly: "MONTHLY",
  BiWeekly: "BI-WEEKLY",
  Weekly: "WEEKLY",
  SemiMonthly: "SEMI-MONTHLY",
} as const;
export type PaystubPayFrequency =
  | (typeof PaystubPayFrequency)[keyof typeof PaystubPayFrequency]
  | (string & {});

export const paystubPayFrequencySchema: EnumSchema<PaystubPayFrequency> =
  s.enumOf<PaystubPayFrequency>(PaystubPayFrequency);
