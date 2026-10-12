import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identityMatchUserSchema, type IdentityMatchUser } from "./identity-match-user.js";

/** ProcessorIdentityMatchRequest defines the request schema for `/processor/identity/match` */
export type ProcessorIdentityMatchRequest = {
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
  /**
   * The processor token obtained from the Plaid integration partner. Processor tokens are in the
   * format: `processor-<environment>-<identifier>`
   */
  processorToken: string;
  /**
   * The user's legal name, phone number, email address and address used to perform fuzzy match. If
   * Financial Account Matching is enabled in the Identity Verification product, leave this field
   * empty to automatically match against PII collected from the Identity Verification checks.
   */
  user?: IdentityMatchUser;
};

export const processorIdentityMatchRequestSchema: Schema<ProcessorIdentityMatchRequest> =
  s.object<ProcessorIdentityMatchRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    user: s.optional(s.lazy(() => identityMatchUserSchema)),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
