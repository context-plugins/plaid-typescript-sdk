import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportAuditCopyCreateRequest = {
  clientId?: string;
  secret?: string;
  assetReportToken: string;
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
