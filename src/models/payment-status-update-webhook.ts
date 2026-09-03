import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  paymentInitiationPaymentStatusSchema,
  type PaymentInitiationPaymentStatus,
} from "./payment-initiation-payment-status.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type PaymentStatusUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  paymentId: string;
  transactionId?: string | null;
  newPaymentStatus: PaymentInitiationPaymentStatus;
  oldPaymentStatus: PaymentInitiationPaymentStatus;
  originalReference: string | null;
  adjustedReference?: string | null;
  originalStartDate: string | null;
  adjustedStartDate: string | null;
  timestamp: Date;
  error?: Error | null;
  environment: WebhookEnvironmentValues;
};

export const paymentStatusUpdateWebhookSchema: Schema<PaymentStatusUpdateWebhook> =
  s.object<PaymentStatusUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    paymentId: s.string(),
    transactionId: s.optionalNullable(s.string()),
    newPaymentStatus: paymentInitiationPaymentStatusSchema,
    oldPaymentStatus: paymentInitiationPaymentStatusSchema,
    originalReference: s.nullable(s.string()),
    adjustedReference: s.optionalNullable(s.string()),
    originalStartDate: s.nullable(s.dateOnly()),
    adjustedStartDate: s.nullable(s.dateOnly()),
    timestamp: s.dateTime(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      paymentId: "payment_id",
      transactionId: "transaction_id",
      newPaymentStatus: "new_payment_status",
      oldPaymentStatus: "old_payment_status",
      originalReference: "original_reference",
      adjustedReference: "adjusted_reference",
      originalStartDate: "original_start_date",
      adjustedStartDate: "adjusted_start_date",
    },
  });
