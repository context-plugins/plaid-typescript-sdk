import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * PaymentInitiationPaymentListRequest defines the request schema for
 * `/payment_initiation/payment/list`
 */
export type PaymentInitiationPaymentListRequest = {
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
  /**
   * The maximum number of payments to return. If `count` is not specified, a maximum of 10 payments
   * will be returned, beginning with the most recent payment before the cursor (if specified).
   *
   * @default 10
   */
  count?: number | null;
  /**
   * A string in RFC 3339 format (i.e. "2019-12-06T22:35:49Z"). Only payments created before the
   * cursor will be returned.
   */
  cursor?: Date | null;
  /** The consent ID. If specified, only payments, executed using this consent, will be returned. */
  consentId?: string | null;
};

export const paymentInitiationPaymentListRequestSchema: Schema<PaymentInitiationPaymentListRequest> =
  s.object<PaymentInitiationPaymentListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    count: s.defaulted(s.nullable(s.int()), 10),
    cursor: s.optionalNullable(s.dateTime()),
    consentId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      consentId: "consent_id",
    },
  });
