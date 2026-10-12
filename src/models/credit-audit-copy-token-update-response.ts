import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/credit/audit_copy_token/update` */
export type CreditAuditCopyTokenUpdateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** `true` if the Audit Copy Token was successfully updated. */
  updated: boolean;
};

export const creditAuditCopyTokenUpdateResponseSchema: Schema<CreditAuditCopyTokenUpdateResponse> =
  s.object<CreditAuditCopyTokenUpdateResponse>({
    requestId: s.string(),
    updated: s.boolean(),
    _keysMap: {
      requestId: "request_id",
    },
  });
