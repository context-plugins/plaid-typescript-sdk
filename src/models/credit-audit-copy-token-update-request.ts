import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CreditAuditCopyTokenUpdateRequest defines the request schema for
 * `/credit/audit_copy_token/update`
 */
export type CreditAuditCopyTokenUpdateRequest = {
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
  /** The `audit_copy_token` you would like to update. */
  auditCopyToken: string;
  /**
   * Array of tokens which the specified Audit Copy Token will be updated with. The types of token
   * supported are asset report token and employment report token. There can be at most 1 of each
   * token type in the array.
   */
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
