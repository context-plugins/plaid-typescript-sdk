import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditAuditCopyTokenCreateResponse = {
  auditCopyToken: string;
  requestId: string;
};

export const creditAuditCopyTokenCreateResponseSchema: Schema<CreditAuditCopyTokenCreateResponse> =
  s.object<CreditAuditCopyTokenCreateResponse>({
    auditCopyToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      auditCopyToken: "audit_copy_token",
      requestId: "request_id",
    },
  });
