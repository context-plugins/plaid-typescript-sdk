import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxFdxConsentSeedRequest = {
  clientId?: string;
  secret?: string;
  customerId: string;
  applicationId: string;
  consentId?: string;
};

export const sandboxFdxConsentSeedRequestSchema: Schema<SandboxFdxConsentSeedRequest> =
  s.object<SandboxFdxConsentSeedRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    customerId: s.string(),
    applicationId: s.string(),
    consentId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      customerId: "customer_id",
      applicationId: "application_id",
      consentId: "consent_id",
    },
  });
