import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAmountToRefundSchema, type PaymentAmountToRefund } from "./payment-amount-to-refund.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";

/**
 * PaymentInitiationPaymentReverseRequest defines the request schema for
 * `/payment_initiation/payment/reverse`
 */
export type PaymentInitiationPaymentReverseRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The ID of the payment to reverse */
  paymentId: string;
  /**
   * A random key provided by the client, per unique wallet transaction. Maximum of 128 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. If a request to execute a wallet transaction fails due to a network
   * connection error, then after a minimum delay of one minute, you can retry the request with the
   * same idempotency key to guarantee that only a single wallet transaction is created. If the
   * request was successfully processed, it will prevent any transaction that uses the same
   * idempotency key, and was received within 24 hours of the first request, from being processed.
   */
  idempotencyKey: string;
  /**
   * A reference for the refund. This must be an alphanumeric string with 6 to 18 characters and
   * must not contain any special characters or spaces.
   */
  reference: string;
  /** The amount and currency of a payment */
  amount?: PaymentAmountToRefund | null;
  /**
   * The counterparty's birthdate, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD)
   * format.
   */
  counterpartyDateOfBirth?: string | null;
  /**
   * The optional address of the payment recipient's bank account. Required by most institutions
   * outside of the UK.
   */
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
