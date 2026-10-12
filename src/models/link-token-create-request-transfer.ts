import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specifies options for initializing Link for use with the Transfer product. */
export type LinkTokenCreateRequestTransfer = {
  /** The `id` returned by the `/transfer/intent/create` endpoint. */
  intentId?: string;
  /**
   * The `id` returned by the `/transfer/authorization/create` endpoint. Used to indicate Link
   * session to complete required user action in order to make a decision for the authorization. If
   * set, `access_token` can be omitted.
   */
  authorizationId?: string;
  /** The `payment_profile_token` returned by the `/payment_profile/create` endpoint. */
  paymentProfileToken?: string;
};

export const linkTokenCreateRequestTransferSchema: Schema<LinkTokenCreateRequestTransfer> =
  s.object<LinkTokenCreateRequestTransfer>({
    intentId: s.optional(s.string()),
    authorizationId: s.optional(s.string()),
    paymentProfileToken: s.optional(s.string()),
    _keysMap: {
      intentId: "intent_id",
      authorizationId: "authorization_id",
      paymentProfileToken: "payment_profile_token",
    },
  });
