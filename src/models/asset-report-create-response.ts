import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportCreateResponse = {
  assetReportToken: string;
  assetReportId: string;
  requestId: string;
};

export const assetReportCreateResponseSchema: Schema<AssetReportCreateResponse> =
  s.object<AssetReportCreateResponse>({
    assetReportToken: s.string(),
    assetReportId: s.string(),
    requestId: s.string(),
    _keysMap: {
      assetReportToken: "asset_report_token",
      assetReportId: "asset_report_id",
      requestId: "request_id",
    },
  });
