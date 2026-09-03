import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetReportSchema, type AssetReport } from "./asset-report.js";
import { warningSchema, type Warning } from "./warning.js";

export type AssetReportGetResponse = {
  report: AssetReport;
  warnings: Warning[];
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
