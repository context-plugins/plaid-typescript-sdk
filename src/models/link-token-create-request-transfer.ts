import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestTransfer = {
  intentId?: string;
  authorizationId?: string;
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
