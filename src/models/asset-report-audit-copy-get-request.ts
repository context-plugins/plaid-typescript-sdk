import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AssetReportAuditCopyGetRequest defines the request schema for `/asset_report/audit_copy/get` */
export type AssetReportAuditCopyGetRequest = {
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
  /** The `audit_copy_token` granting access to the Audit Copy you would like to get. */
  auditCopyToken: string;
};

export const assetReportAuditCopyGetRequestSchema: Schema<AssetReportAuditCopyGetRequest> =
  s.object<AssetReportAuditCopyGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    auditCopyToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      auditCopyToken: "audit_copy_token",
    },
  });
