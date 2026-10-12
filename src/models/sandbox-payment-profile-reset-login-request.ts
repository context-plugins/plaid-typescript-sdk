import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxPaymentProfileResetLoginRequest defines the request schema for
 * `/sandbox/payment_profile/reset_login`
 */
export type SandboxPaymentProfileResetLoginRequest = {
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

export const sandboxPaymentProfileResetLoginRequestSchema: Schema<SandboxPaymentProfileResetLoginRequest> =
  s.object<SandboxPaymentProfileResetLoginRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    paymentProfileToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      paymentProfileToken: "payment_profile_token",
    },
  });
