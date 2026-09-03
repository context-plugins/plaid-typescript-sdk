import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountToRefundSchema, type PaymentAmountToRefund } from "./payment-amount-to-refund.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";

export type PaymentInitiationPaymentReverseRequest = {
  clientId?: string;
  secret?: string;
  paymentId: string;
  idempotencyKey: string;
  reference: string;
  amount?: PaymentAmountToRefund | null;
  counterpartyDateOfBirth?: string | null;
  counterpartyAddress?: PaymentInitiationAddress | null;
};

export const paymentInitiationPaymentReverseRequestSchema: Schema<PaymentInitiationPaymentReverseRequest> =
  s.object<PaymentInitiationPaymentReverseRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    paymentId: s.string(),
    idempotencyKey: s.string(),
    reference: s.string(),
    amount: s.optionalNullable(s.lazy(() => paymentAmountToRefundSchema)),
    counterpartyDateOfBirth: s.optionalNullable(s.dateOnly()),
    counterpartyAddress: s.optionalNullable(s.lazy(() => paymentInitiationAddressSchema)),
    _keysMap: {
      clientId: "client_id",
      paymentId: "payment_id",
      idempotencyKey: "idempotency_key",
      counterpartyDateOfBirth: "counterparty_date_of_birth",
      counterpartyAddress: "counterparty_address",
    },
  });
