import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CreditAuditCopyTokenRemoveResponse defines the response schema for
 * `/credit/audit_copy_token/remove`
 */
export type CreditAuditCopyTokenRemoveResponse = {
  /** `true` if the Audit Copy was successfully removed. */
  removed: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const creditAuditCopyTokenRemoveResponseSchema: Schema<CreditAuditCopyTokenRemoveResponse> =
  s.object<CreditAuditCopyTokenRemoveResponse>({
    removed: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
