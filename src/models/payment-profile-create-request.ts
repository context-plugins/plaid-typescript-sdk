import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** PaymentProfileCreateRequest defines the request schema for `/payment_profile/create` */
export type PaymentProfileCreateRequest = {
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
};

export const paymentProfileCreateRequestSchema: Schema<PaymentProfileCreateRequest> =
  s.object<PaymentProfileCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
    },
  });
