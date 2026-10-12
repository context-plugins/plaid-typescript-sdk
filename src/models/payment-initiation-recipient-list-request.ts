import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * PaymentInitiationRecipientListRequest defines the request schema for
 * `/payment_initiation/recipient/list`
 */
export type PaymentInitiationRecipientListRequest = {
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
   * The maximum number of recipients to return. If `count` is not specified, a maximum of 100
   * recipients will be returned, beginning with the recipient at the cursor (if specified).
   *
   * @default 100
   */
  count?: number | null;
  /**
   * A value representing the latest recipient to be included in the response. Set this from
   * `next_cursor` received from the previous `/payment_initiation/recipient/list` request. If
   * provided, the response will only contain that recipient and recipients created before it. If
   * omitted, the response will contain recipients starting from the most recent, and in descending
   * order by the `created_at` time.
   */
  cursor?: string;
};

export const paymentInitiationRecipientListRequestSchema: Schema<PaymentInitiationRecipientListRequest> =
  s.object<PaymentInitiationRecipientListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    count: s.defaulted(s.nullable(s.int()), 100),
    cursor: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
    },
  });
