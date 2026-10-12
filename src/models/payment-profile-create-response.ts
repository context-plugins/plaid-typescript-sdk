import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** PaymentProfileCreateResponse defines the response schema for `/payment_profile/create` */
export type PaymentProfileCreateResponse = {
  /** A payment profile token associated with the Payment Profile data that is being requested. */
  paymentProfileToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentProfileCreateResponseSchema: Schema<PaymentProfileCreateResponse> =
  s.object<PaymentProfileCreateResponse>({
    paymentProfileToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      paymentProfileToken: "payment_profile_token",
      requestId: "request_id",
    },
  });
