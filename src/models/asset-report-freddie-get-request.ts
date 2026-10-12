import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * AssetReportFreddieGetRequest defines the request schema for
 * `/credit/asset_report/freddie_mac/get`
 */
export type AssetReportFreddieGetRequest = {
  /**
   * A token that can be shared with a third party auditor to allow them to obtain access to the
   * Asset Report. This token should be stored securely.
   */
  auditCopyToken: string;
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
};

export const assetReportFreddieGetRequestSchema: Schema<AssetReportFreddieGetRequest> =
  s.object<AssetReportFreddieGetRequest>({
    auditCopyToken: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      auditCopyToken: "audit_copy_token",
      clientId: "client_id",
    },
  });
