import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportRemoveRequest = {
  clientId?: string;
  secret?: string;
  assetReportToken: string;
};

export const assetReportRemoveRequestSchema: Schema<AssetReportRemoveRequest> =
  s.object<AssetReportRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    assetReportToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      assetReportToken: "asset_report_token",
    },
  });
