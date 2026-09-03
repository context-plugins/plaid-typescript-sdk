import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportGetRequestOptionsSchema,
  type AssetReportGetRequestOptions,
} from "./asset-report-get-request-options.js";

export type AssetReportGetRequest = {
  clientId?: string;
  secret?: string;
  assetReportToken?: string;
  userToken?: string;
  includeInsights?: boolean;
  fastReport?: boolean;
  options?: AssetReportGetRequestOptions;
};

export const assetReportGetRequestSchema: Schema<AssetReportGetRequest> = s.object<AssetReportGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  assetReportToken: s.optional(s.string()),
  userToken: s.optional(s.string()),
  includeInsights: s.optional(s.boolean()),
  fastReport: s.optional(s.boolean()),
  options: s.optional(s.lazy(() => assetReportGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    assetReportToken: "asset_report_token",
    userToken: "user_token",
    includeInsights: "include_insights",
    fastReport: "fast_report",
  },
});
