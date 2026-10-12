import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** PaymentProfileRemoveRequest defines the request schema for `/payment_profile/remove` */
export type PaymentProfileRemoveRequest = {
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
  /** A payment profile token associated with the Payment Profile data that is being requested. */
  paymentProfileToken: string;
};

export const paymentProfileRemoveRequestSchema: Schema<PaymentProfileRemoveRequest> =
  s.object<PaymentProfileRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    paymentProfileToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      paymentProfileToken: "payment_profile_token",
    },
  });
