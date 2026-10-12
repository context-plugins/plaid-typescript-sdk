import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CreditAuditCopyTokenCreateResponse defines the response schema for
 * `/credit/audit_copy_token/create`
 */
export type CreditAuditCopyTokenCreateResponse = {
  /**
   * A token that can be shared with a third party auditor, which allows them to fetch the Asset
   * Reports attached to the token. This token should be stored securely.
   */
  auditCopyToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
