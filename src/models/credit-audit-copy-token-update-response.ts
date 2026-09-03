import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditAuditCopyTokenUpdateResponse = {
  requestId: string;
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
