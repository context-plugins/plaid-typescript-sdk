import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityVerificationAutofillCreateRequest = {
  identityVerificationId: string;
  clientId?: string;
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
