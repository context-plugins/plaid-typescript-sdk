import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportFilterRequest = {
  clientId?: string;
  secret?: string;
  assetReportToken: string;
  accountIdsToExclude: string[];
};

export const assetReportFilterRequestSchema: Schema<AssetReportFilterRequest> =
  s.object<AssetReportFilterRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    assetReportToken: s.string(),
    accountIdsToExclude: s.array(s.string()),
    _keysMap: {
      clientId: "client_id",
      assetReportToken: "asset_report_token",
      accountIdsToExclude: "account_ids_to_exclude",
    },
  });
