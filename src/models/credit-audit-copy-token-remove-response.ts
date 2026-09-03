import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditAuditCopyTokenRemoveResponse = {
  removed: boolean;
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
