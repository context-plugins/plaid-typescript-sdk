import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * AssetReportAuditCopyCreateResponse defines the response schema for
 * `/asset_report/audit_copy/create`
 */
export type AssetReportAuditCopyCreateResponse = {
  /**
   * A token that can be shared with a third party auditor to allow them to obtain access to the
   * Asset Report. This token should be stored securely.
   */
  auditCopyToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const assetReportAuditCopyCreateResponseSchema: Schema<AssetReportAuditCopyCreateResponse> =
  s.object<AssetReportAuditCopyCreateResponse>({
    auditCopyToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      auditCopyToken: "audit_copy_token",
      requestId: "request_id",
    },
  });
