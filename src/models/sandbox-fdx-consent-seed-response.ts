import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxFdxConsentSeedResponse = {
  consentId: string;
  requestId: string;
};

export const sandboxFdxConsentSeedResponseSchema: Schema<SandboxFdxConsentSeedResponse> =
  s.object<SandboxFdxConsentSeedResponse>({
    consentId: s.string(),
    requestId: s.string(),
    _keysMap: {
      consentId: "consent_id",
      requestId: "request_id",
    },
  });
