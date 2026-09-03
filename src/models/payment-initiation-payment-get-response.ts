import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  externalPaymentRefundDetailsSchema,
  type ExternalPaymentRefundDetails,
} from "./external-payment-refund-details.js";
import {
  externalPaymentScheduleGetSchema,
  type ExternalPaymentScheduleGet,
} from "./external-payment-schedule-get.js";
import { paymentAmountRefundedSchema, type PaymentAmountRefunded } from "./payment-amount-refunded.js";
import { paymentAmountSchema, type PaymentAmount } from "./payment-amount.js";
import {
  paymentInitiationPaymentStatusSchema,
  type PaymentInitiationPaymentStatus,
} from "./payment-initiation-payment-status.js";
import { paymentSchemeSchema, type PaymentScheme } from "./payment-scheme.js";
import { senderBacsNullableSchema, type SenderBacsNullable } from "./sender-bacs-nullable.js";

export type PaymentInitiationPaymentGetResponse = {
  paymentId: string;
  amount: PaymentAmount;
  status: PaymentInitiationPaymentStatus;
  recipientId: string;
  reference: string;
  adjustedReference?: string | null;
  lastStatusUpdate: Date;
  schedule?: ExternalPaymentScheduleGet | null;
  refundDetails?: ExternalPaymentRefundDetails | null;
  bacs: SenderBacsNullable | null;
  iban: string | null;
  refundIds?: string[] | null;
  amountRefunded?: PaymentAmountRefunded | null;
  walletId?: string | null;
  scheme?: PaymentScheme | null;
  adjustedScheme?: PaymentScheme | null;
  consentId?: string | null;
  transactionId?: string | null;
  endToEndId?: string | null;
  error?: Error | null;
  requestId: string;
};

export const paymentInitiationPaymentGetResponseSchema: Schema<PaymentInitiationPaymentGetResponse> =
  s.object<PaymentInitiationPaymentGetResponse>({
    paymentId: s.string(),
    amount: paymentAmountSchema,
    status: paymentInitiationPaymentStatusSchema,
    recipientId: s.string(),
    reference: s.string(),
    adjustedReference: s.optionalNullable(s.string()),
    lastStatusUpdate: s.dateTime(),
    schedule: s.optionalNullable(s.lazy(() => externalPaymentScheduleGetSchema)),
    refundDetails: s.optionalNullable(s.lazy(() => externalPaymentRefundDetailsSchema)),
    bacs: s.nullable(s.lazy(() => senderBacsNullableSchema)),
    iban: s.nullable(s.string()),
    refundIds: s.optionalNullable(s.array(s.string())),
    amountRefunded: s.optionalNullable(s.lazy(() => paymentAmountRefundedSchema)),
    walletId: s.optionalNullable(s.string()),
    scheme: s.optionalNullable(s.lazy(() => paymentSchemeSchema)),
    adjustedScheme: s.optionalNullable(s.lazy(() => paymentSchemeSchema)),
    consentId: s.optionalNullable(s.string()),
    transactionId: s.optionalNullable(s.string()),
    endToEndId: s.optionalNullable(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    requestId: s.string(),
    _keysMap: {
      paymentId: "payment_id",
      recipientId: "recipient_id",
      adjustedReference: "adjusted_reference",
      lastStatusUpdate: "last_status_update",
      refundDetails: "refund_details",
      refundIds: "refund_ids",
      amountRefunded: "amount_refunded",
      walletId: "wallet_id",
      adjustedScheme: "adjusted_scheme",
      consentId: "consent_id",
      transactionId: "transaction_id",
      endToEndId: "end_to_end_id",
      requestId: "request_id",
    },
  });
