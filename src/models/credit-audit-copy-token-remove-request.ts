import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CreditAuditCopyTokenRemoveRequest defines the request schema for
 * `/credit/audit_copy_token/remove`
 */
export type CreditAuditCopyTokenRemoveRequest = {
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
  /** The `audit_copy_token` granting access to the Audit Copy you would like to revoke. */
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
