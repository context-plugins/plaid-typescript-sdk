import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportPdfGetRequestOptionsSchema,
  type AssetReportPdfGetRequestOptions,
} from "./asset-report-pdf-get-request-options.js";

export type AssetReportAuditCopyPdfGetRequest = {
  clientId?: string;
  secret?: string;
  auditCopyToken: string;
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
