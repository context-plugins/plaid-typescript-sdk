import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * AssetReportAuditCopyCreateRequest defines the request schema for
 * `/asset_report/audit_copy/create`
 */
export type AssetReportAuditCopyCreateRequest = {
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
   * A token that can be provided to endpoints such as `/asset_report/get` or
   * `/asset_report/pdf/get` to fetch or update an Asset Report.
   */
  assetReportToken: string;
  /** The `auditor_id` of the third party with whom you would like to share the Asset Report. */
  auditorId?: string;
};

export const assetReportAuditCopyCreateRequestSchema: Schema<AssetReportAuditCopyCreateRequest> =
  s.object<AssetReportAuditCopyCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    assetReportToken: s.string(),
    auditorId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      assetReportToken: "asset_report_token",
      auditorId: "auditor_id",
    },
  });
