import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentInitiationPaymentStatus = {
  PaymentStatusInputNeeded: "PAYMENT_STATUS_INPUT_NEEDED",
  PaymentStatusProcessing: "PAYMENT_STATUS_PROCESSING",
  PaymentStatusInitiated: "PAYMENT_STATUS_INITIATED",
  PaymentStatusCompleted: "PAYMENT_STATUS_COMPLETED",
  PaymentStatusInsufficientFunds: "PAYMENT_STATUS_INSUFFICIENT_FUNDS",
  PaymentStatusFailed: "PAYMENT_STATUS_FAILED",
  PaymentStatusBlocked: "PAYMENT_STATUS_BLOCKED",
  PaymentStatusUnknown: "PAYMENT_STATUS_UNKNOWN",
  PaymentStatusExecuted: "PAYMENT_STATUS_EXECUTED",
  PaymentStatusSettled: "PAYMENT_STATUS_SETTLED",
  PaymentStatusAuthorising: "PAYMENT_STATUS_AUTHORISING",
  PaymentStatusCancelled: "PAYMENT_STATUS_CANCELLED",
  PaymentStatusEstablished: "PAYMENT_STATUS_ESTABLISHED",
  PaymentStatusRejected: "PAYMENT_STATUS_REJECTED",
} as const;
export type PaymentInitiationPaymentStatus =
  | (typeof PaymentInitiationPaymentStatus)[keyof typeof PaymentInitiationPaymentStatus]
  | (string & {});

export const paymentInitiationPaymentStatusSchema: EnumSchema<PaymentInitiationPaymentStatus> =
  s.enumOf<PaymentInitiationPaymentStatus>(PaymentInitiationPaymentStatus);
