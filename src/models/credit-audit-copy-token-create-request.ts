import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditAuditCopyTokenCreateRequest = {
  clientId?: string;
  secret?: string;
  reportTokens: string[];
};

export const creditAuditCopyTokenCreateRequestSchema: Schema<CreditAuditCopyTokenCreateRequest> =
  s.object<CreditAuditCopyTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    reportTokens: s.array(s.string()),
    _keysMap: {
      clientId: "client_id",
      reportTokens: "report_tokens",
    },
  });
