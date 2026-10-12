import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetReportSchema, type AssetReport } from "./asset-report.js";
import { warningSchema, type Warning } from "./warning.js";

/** AssetReportGetResponse defines the response schema for `/asset_report/get` */
export type AssetReportGetResponse = {
  /** An object representing an Asset Report */
  report: AssetReport;
  /**
   * If the Asset Report generation was successful but identity information cannot be returned, this
   * array will contain information about the errors causing identity information to be missing
   */
  warnings: Warning[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const assetReportGetResponseSchema: Schema<AssetReportGetResponse> = s.object<AssetReportGetResponse>({
  report: assetReportSchema,
  warnings: s.array(s.lazy(() => warningSchema)),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
