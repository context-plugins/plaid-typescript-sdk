import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportAuditCopyGetRequest = {
  clientId?: string;
  secret?: string;
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
