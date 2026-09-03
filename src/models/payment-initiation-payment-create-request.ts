import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  externalPaymentScheduleRequestSchema,
  type ExternalPaymentScheduleRequest,
} from "./external-payment-schedule-request.js";
import { paymentAmountSchema, type PaymentAmount } from "./payment-amount.js";
import { paymentOptionsSchema, type PaymentOptions } from "./payment-options.js";

export type PaymentInitiationPaymentCreateRequest = {
  clientId?: string;
  secret?: string;
  recipientId: string;
  reference: string;
  amount: PaymentAmount;
  schedule?: ExternalPaymentScheduleRequest | null;
  options?: PaymentOptions | null;
};

export const paymentInitiationPaymentCreateRequestSchema: Schema<PaymentInitiationPaymentCreateRequest> =
  s.object<PaymentInitiationPaymentCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    recipientId: s.string(),
    reference: s.string(),
    amount: paymentAmountSchema,
    schedule: s.optionalNullable(s.lazy(() => externalPaymentScheduleRequestSchema)),
    options: s.optionalNullable(s.lazy(() => paymentOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      recipientId: "recipient_id",
    },
  });
