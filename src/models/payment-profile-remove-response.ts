import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** PaymentProfileRemoveResponse defines the response schema for `/payment_profile/remove` */
export type PaymentProfileRemoveResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentProfileRemoveResponseSchema: Schema<PaymentProfileRemoveResponse> =
  s.object<PaymentProfileRemoveResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
