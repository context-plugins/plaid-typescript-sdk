import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportRefreshResponse = {
  assetReportId: string;
  assetReportToken: string;
  requestId: string;
};

export const assetReportRefreshResponseSchema: Schema<AssetReportRefreshResponse> =
  s.object<AssetReportRefreshResponse>({
    assetReportId: s.string(),
    assetReportToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      assetReportId: "asset_report_id",
      assetReportToken: "asset_report_token",
      requestId: "request_id",
    },
  });
