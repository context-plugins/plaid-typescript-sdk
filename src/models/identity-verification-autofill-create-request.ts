import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input to autofill an Identity Verification */
export type IdentityVerificationAutofillCreateRequest = {
  /** ID of the associated Identity Verification attempt. */
  identityVerificationId: string;
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

export const identityVerificationAutofillCreateRequestSchema: Schema<IdentityVerificationAutofillCreateRequest> =
  s.object<IdentityVerificationAutofillCreateRequest>({
    identityVerificationId: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      identityVerificationId: "identity_verification_id",
      clientId: "client_id",
    },
  });
