import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AssetReportRefreshResponse defines the response schema for `/asset_report/refresh` */
export type AssetReportRefreshResponse = {
  /**
   * A unique ID identifying an Asset Report. Like all Plaid identifiers, this ID is case sensitive.
   */
  assetReportId: string;
  /**
   * A token that can be provided to endpoints such as `/asset_report/get` or
   * `/asset_report/pdf/get` to fetch or update an Asset Report.
   */
  assetReportToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
