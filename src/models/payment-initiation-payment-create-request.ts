import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  externalPaymentScheduleRequestSchema,
  type ExternalPaymentScheduleRequest,
} from "./external-payment-schedule-request.js";
import { paymentAmountSchema, type PaymentAmount } from "./payment-amount.js";
import { paymentOptionsSchema, type PaymentOptions } from "./payment-options.js";

/**
 * PaymentInitiationPaymentCreateRequest defines the request schema for
 * `/payment_initiation/payment/create`
 */
export type PaymentInitiationPaymentCreateRequest = {
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
  /** The ID of the recipient the payment is for. */
  recipientId: string;
  /**
   * A reference for the payment. This must be an alphanumeric string with at most 18 characters and
   * must not contain any special characters (since not all institutions support them). In order to
   * track settlement via Payment Confirmation, each payment must have a unique reference. If the
   * reference provided through the API is not unique, Plaid will adjust it. Some institutions may
   * limit the reference to less than 18 characters. If necessary, Plaid will adjust the reference
   * by truncating it to fit the institution's requirements. Both the originally provided and
   * automatically adjusted references (if any) can be found in the `reference` and
   * `adjusted_reference` fields, respectively.
   */
  reference: string;
  /** The amount and currency of a payment */
  amount: PaymentAmount;
  /**
   * The schedule that the payment will be executed on. If a schedule is provided, the payment is
   * automatically set up as a standing order. If no schedule is specified, the payment will be
   * executed only once.
   */
  schedule?: ExternalPaymentScheduleRequest | null;
  /** Additional payment options */
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
