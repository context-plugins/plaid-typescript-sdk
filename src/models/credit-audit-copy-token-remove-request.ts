import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditAuditCopyTokenRemoveRequest = {
  clientId?: string;
  secret?: string;
  auditCopyToken: string;
};

export const creditAuditCopyTokenRemoveRequestSchema: Schema<CreditAuditCopyTokenRemoveRequest> =
  s.object<CreditAuditCopyTokenRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    auditCopyToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      auditCopyToken: "audit_copy_token",
    },
  });
