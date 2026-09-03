import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditFreddieMacReportsGetRequest = {
  auditCopyToken: string;
  clientId?: string;
  secret?: string;
};

export const creditFreddieMacReportsGetRequestSchema: Schema<CreditFreddieMacReportsGetRequest> =
  s.object<CreditFreddieMacReportsGetRequest>({
    auditCopyToken: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      auditCopyToken: "audit_copy_token",
      clientId: "client_id",
    },
  });
