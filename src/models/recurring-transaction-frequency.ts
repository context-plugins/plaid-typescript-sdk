import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecurringTransactionFrequency = {
  Unknown: "UNKNOWN",
  Weekly: "WEEKLY",
  Biweekly: "BIWEEKLY",
  SemiMonthly: "SEMI_MONTHLY",
  Monthly: "MONTHLY",
  Annually: "ANNUALLY",
} as const;
export type RecurringTransactionFrequency =
  | (typeof RecurringTransactionFrequency)[keyof typeof RecurringTransactionFrequency]
  | (string & {});

export const recurringTransactionFrequencySchema: EnumSchema<RecurringTransactionFrequency> =
  s.enumOf<RecurringTransactionFrequency>(RecurringTransactionFrequency);
