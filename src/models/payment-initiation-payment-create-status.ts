import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentInitiationPaymentCreateStatus = {
  PaymentStatusInputNeeded: "PAYMENT_STATUS_INPUT_NEEDED",
} as const;
export type PaymentInitiationPaymentCreateStatus =
  | (typeof PaymentInitiationPaymentCreateStatus)[keyof typeof PaymentInitiationPaymentCreateStatus]
  | (string & {});

export const paymentInitiationPaymentCreateStatusSchema: EnumSchema<PaymentInitiationPaymentCreateStatus> =
  s.enumOf<PaymentInitiationPaymentCreateStatus>(PaymentInitiationPaymentCreateStatus);
