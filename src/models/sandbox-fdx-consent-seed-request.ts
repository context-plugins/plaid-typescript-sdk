import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Request to seed an FDX consent grant, and its backing item, for the given end user and recipient
 * application so the FDX Consent API can be exercised in Sandbox.
 */
export type SandboxFdxConsentSeedRequest = {
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
  /** The data provider's identifier for the end user to associate the seeded consent grant with. */
  customerId: string;
  /**
   * This field will map to the application ID that is returned from `/item/application/list`, or
   * provided to the institution in an oauth redirect.
   */
  applicationId: string;
  /**
   * Optional UUIDv4 identifier for the seeded consent grant. If omitted, one is generated. Seeding
   * fails if a grant with this identifier already exists.
   */
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
