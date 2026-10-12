import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * AssetReportAuditCopyRemoveResponse defines the response schema for
 * `/asset_report/audit_copy/remove`
 */
export type AssetReportAuditCopyRemoveResponse = {
  /** `true` if the Audit Copy was successfully removed. */
  removed: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
