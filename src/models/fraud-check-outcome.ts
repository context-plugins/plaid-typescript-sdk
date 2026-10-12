import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The outcome of the fraud check.
 *
 *
 * `success` - The check passed.
 *
 * `failed` - The check did not pass.
 */
export const FraudCheckOutcome = {
  Success: "success",
  Failed: "failed",
} as const;
export type FraudCheckOutcome = (typeof FraudCheckOutcome)[keyof typeof FraudCheckOutcome] | (string & {});

export const fraudCheckOutcomeSchema: EnumSchema<FraudCheckOutcome> =
  s.enumOf<FraudCheckOutcome>(FraudCheckOutcome);
