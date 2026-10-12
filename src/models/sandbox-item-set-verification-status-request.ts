import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatus1Schema, type VerificationStatus1 } from "./verification-status1.js";

/**
 * SandboxItemSetVerificationStatusRequest defines the request schema for
 * `/sandbox/item/set_verification_status`
 */
export type SandboxItemSetVerificationStatusRequest = {
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
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /** The `account_id` of the account whose verification status is to be modified */
  accountId: string;
  /** The verification status to set the account to. */
  verificationStatus: VerificationStatus1;
};

export const sandboxItemSetVerificationStatusRequestSchema: Schema<SandboxItemSetVerificationStatusRequest> =
  s.object<SandboxItemSetVerificationStatusRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    accountId: s.string(),
    verificationStatus: verificationStatus1Schema,
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountId: "account_id",
      verificationStatus: "verification_status",
    },
  });
