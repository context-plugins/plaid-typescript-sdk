import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportRefreshRequestOptionsSchema,
  type AssetReportRefreshRequestOptions,
} from "./asset-report-refresh-request-options.js";

/** AssetReportRefreshRequest defines the request schema for `/asset_report/refresh` */
export type AssetReportRefreshRequest = {
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
  /** The `asset_report_token` returned by the original call to `/asset_report/create` */
  assetReportToken: string;
  /**
   * The maximum number of days of history to include in the Asset Report. Must be an integer. If
   * not specified, the value from the original call to `/asset_report/create` will be used.
   */
  daysRequested?: number | null;
  /**
   * An optional object to filter `/asset_report/refresh` results. If provided, cannot be `null`. If
   * not specified, the `options` from the original call to `/asset_report/create` will be used.
   */
  options?: AssetReportRefreshRequestOptions;
};

export const assetReportRefreshRequestSchema: Schema<AssetReportRefreshRequest> =
  s.object<AssetReportRefreshRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    assetReportToken: s.string(),
    daysRequested: s.optionalNullable(s.int()),
    options: s.optional(s.lazy(() => assetReportRefreshRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      assetReportToken: "asset_report_token",
      daysRequested: "days_requested",
    },
  });
