import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportGetRequestOptionsSchema,
  type AssetReportGetRequestOptions,
} from "./asset-report-get-request-options.js";

/** AssetReportGetRequest defines the request schema for `/asset_report/get` */
export type AssetReportGetRequest = {
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
  assetReportToken?: string;
  /**
   * The user token associated with the User for which to create an asset report for. The latest
   * asset report associated with the User will be returned
   */
  userToken?: string;
  /**
   * `true` if you would like to retrieve the Asset Report with Insights, `false` otherwise. This
   * field defaults to `false` if omitted.
   *
   * @default false
   */
  includeInsights?: boolean;
  /**
   * `true` to fetch "fast" version of asset report. Defaults to false if omitted. Can only be used
   * if `/asset_report/create` was called with `options.add_ons` set to `["fast_assets"]`.
   *
   * @default false
   */
  fastReport?: boolean;
  /**
   * An optional object to filter or add data to `/asset_report/get` results. If provided, must be
   * non-`null`.
   */
  options?: AssetReportGetRequestOptions;
};

export const assetReportGetRequestSchema: Schema<AssetReportGetRequest> = s.object<AssetReportGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  assetReportToken: s.optional(s.string()),
  userToken: s.optional(s.string()),
  includeInsights: s.defaulted(s.boolean(), false),
  fastReport: s.defaulted(s.boolean(), false),
  options: s.optional(s.lazy(() => assetReportGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    assetReportToken: "asset_report_token",
    userToken: "user_token",
    includeInsights: "include_insights",
    fastReport: "fast_report",
  },
});
