import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for fetching an Identity Verification */
export type IdentityVerificationGetRequest = {
  /** ID of the associated Identity Verification attempt. */
  identityVerificationId: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
};

export const identityVerificationGetRequestSchema: Schema<IdentityVerificationGetRequest> =
  s.object<IdentityVerificationGetRequest>({
    identityVerificationId: s.string(),
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    _keysMap: {
      identityVerificationId: "identity_verification_id",
      clientId: "client_id",
    },
  });
