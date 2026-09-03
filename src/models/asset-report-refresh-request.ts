import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportRefreshRequestOptionsSchema,
  type AssetReportRefreshRequestOptions,
} from "./asset-report-refresh-request-options.js";

export type AssetReportRefreshRequest = {
  clientId?: string;
  secret?: string;
  assetReportToken: string;
  daysRequested?: number | null;
  options?: AssetReportRefreshRequestOptions;
};

export const assetReportRefreshRequestSchema: Schema<AssetReportRefreshRequest> =
  s.object<AssetReportRefreshRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    assetReportToken: s.string(),
    daysRequested: s.optionalNullable(s.number()),
    options: s.optional(s.lazy(() => assetReportRefreshRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      assetReportToken: "asset_report_token",
      daysRequested: "days_requested",
    },
  });
