import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportPdfGetRequestOptionsSchema,
  type AssetReportPdfGetRequestOptions,
} from "./asset-report-pdf-get-request-options.js";

export type AssetReportPdfGetRequest = {
  clientId?: string;
  secret?: string;
  assetReportToken: string;
  options?: AssetReportPdfGetRequestOptions;
};

export const assetReportPdfGetRequestSchema: Schema<AssetReportPdfGetRequest> =
  s.object<AssetReportPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    assetReportToken: s.string(),
    options: s.optional(s.lazy(() => assetReportPdfGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      assetReportToken: "asset_report_token",
    },
  });
