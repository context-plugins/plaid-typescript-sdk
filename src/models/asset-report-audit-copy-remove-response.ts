import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportAuditCopyRemoveResponse = {
  removed: boolean;
  requestId: string;
};

export const assetReportAuditCopyRemoveResponseSchema: Schema<AssetReportAuditCopyRemoveResponse> =
  s.object<AssetReportAuditCopyRemoveResponse>({
    removed: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
