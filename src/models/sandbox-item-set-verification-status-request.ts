import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatus1Schema, type VerificationStatus1 } from "./verification-status1.js";

export type SandboxItemSetVerificationStatusRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  accountId: string;
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
