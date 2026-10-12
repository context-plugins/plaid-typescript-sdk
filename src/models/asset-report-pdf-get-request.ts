import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportPdfGetRequestOptionsSchema,
  type AssetReportPdfGetRequestOptions,
} from "./asset-report-pdf-get-request-options.js";

/** AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get` */
export type AssetReportPdfGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * A token that can be provided to endpoints such as `/asset_report/get` or
   * `/asset_report/pdf/get` to fetch or update an Asset Report.
   */
  assetReportToken: string;
  /**
   * An optional object to filter or add data to `/asset_report/get` results. If provided, must be
   * non-`null`.
   */
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
