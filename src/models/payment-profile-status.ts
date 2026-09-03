import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentProfileStatus = {
  Pending: "PENDING",
  Ready: "READY",
  Removed: "REMOVED",
} as const;
export type PaymentProfileStatus =
  | (typeof PaymentProfileStatus)[keyof typeof PaymentProfileStatus]
  | (string & {});

export const paymentProfileStatusSchema: EnumSchema<PaymentProfileStatus> =
  s.enumOf<PaymentProfileStatus>(PaymentProfileStatus);
