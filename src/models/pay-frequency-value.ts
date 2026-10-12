import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The frequency of the pay period. */
export const PayFrequencyValue = {
  Monthly: "monthly",
  Semimonthly: "semimonthly",
  Weekly: "weekly",
  Biweekly: "biweekly",
  Unknown: "unknown",
} as const;
export type PayFrequencyValue = (typeof PayFrequencyValue)[keyof typeof PayFrequencyValue] | (string & {});

export const payFrequencyValueSchema: EnumSchema<PayFrequencyValue> =
  s.enumOf<PayFrequencyValue>(PayFrequencyValue);
