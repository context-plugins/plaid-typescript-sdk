import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditAuditCopyTokenUpdateRequest = {
  clientId?: string;
  secret?: string;
  auditCopyToken: string;
  reportTokens: string[];
};

export const creditAuditCopyTokenUpdateRequestSchema: Schema<CreditAuditCopyTokenUpdateRequest> =
  s.object<CreditAuditCopyTokenUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    auditCopyToken: s.string(),
    reportTokens: s.array(s.string()),
    _keysMap: {
      clientId: "client_id",
      auditCopyToken: "audit_copy_token",
      reportTokens: "report_tokens",
    },
  });
