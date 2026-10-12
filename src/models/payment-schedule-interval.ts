import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The frequency interval of the payment. */
export const PaymentScheduleInterval = {
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
} as const;
export type PaymentScheduleInterval =
  | (typeof PaymentScheduleInterval)[keyof typeof PaymentScheduleInterval]
  | (string & {});

export const paymentScheduleIntervalSchema: EnumSchema<PaymentScheduleInterval> =
  s.enumOf<PaymentScheduleInterval>(PaymentScheduleInterval);
