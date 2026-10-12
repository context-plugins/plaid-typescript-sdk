import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Response containing the identifier of the seeded FDX consent grant, which can then be listed,
 * retrieved, and revoked through the FDX Consent API.
 */
export type SandboxFdxConsentSeedResponse = {
  /** The identifier of the newly seeded FDX consent grant. */
  consentId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
