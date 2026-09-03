import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityVerificationGetRequest = {
  identityVerificationId: string;
  secret?: string;
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
