import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AssetReportCreateResponse defines the response schema for `/asset_report/create` */
export type AssetReportCreateResponse = {
  /**
   * A token that can be provided to endpoints such as `/asset_report/get` or
   * `/asset_report/pdf/get` to fetch or update an Asset Report.
   */
  assetReportToken: string;
  /**
   * A unique ID identifying an Asset Report. Like all Plaid identifiers, this ID is case sensitive.
   */
  assetReportId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
