import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportPdfGetRequestOptionsSchema,
  type AssetReportPdfGetRequestOptions,
} from "./asset-report-pdf-get-request-options.js";

/**
 * AssetReportAuditCopyPDFGetRequest defines the request schema for
 * `/asset_report/audit_copy/pdf/get`
 */
export type AssetReportAuditCopyPdfGetRequest = {
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
  /** The `audit_copy_token` granting access to the Audit Copy you would like to get as a PDF. */
  auditCopyToken: string;
  /**
   * An optional object to filter or add data to `/asset_report/get` results. If provided, must be
   * non-`null`.
   */
  options?: AssetReportPdfGetRequestOptions;
};

export const assetReportAuditCopyPdfGetRequestSchema: Schema<AssetReportAuditCopyPdfGetRequest> =
  s.object<AssetReportAuditCopyPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    auditCopyToken: s.string(),
    options: s.optional(s.lazy(() => assetReportPdfGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      auditCopyToken: "audit_copy_token",
    },
  });
