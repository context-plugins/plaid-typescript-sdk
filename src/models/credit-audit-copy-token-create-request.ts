import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CreditAuditCopyTokenCreateRequest defines the request schema for
 * `/credit/audit_copy_token/create`
 */
export type CreditAuditCopyTokenCreateRequest = {
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
   * List of report tokens; can include at most one VOA/standard Asset Report tokens and one VOE
   * Asset Report Token.
   */
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
