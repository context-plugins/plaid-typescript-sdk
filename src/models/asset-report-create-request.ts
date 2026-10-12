import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportCreateRequestOptionsSchema,
  type AssetReportCreateRequestOptions,
} from "./asset-report-create-request-options.js";

/** AssetReportCreateRequest defines the request schema for `/asset_report/create` */
export type AssetReportCreateRequest = {
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
   * An array of access tokens corresponding to the Items that will be included in the report. The
   * `assets` product must have been initialized for the Items during Link; the Assets product
   * cannot be added after initialization.
   */
  accessTokens?: string[];
  /**
   * The maximum integer number of days of history to include in the Asset Report. If using Fannie
   * Mae Day 1 Certainty, `days_requested` must be at least 61 for new originations or at least 31
   * for refinancings.
   *
   * An Asset Report requested with "Additional History" (that is, with more than 61 days of
   * transaction history) will incur an Additional History fee.
   */
  daysRequested: number;
  /**
   * An optional object to filter `/asset_report/create` results. If provided, must be non-`null`.
   * The optional `user` object is required for the report to be eligible for Fannie Mae's Day 1
   * Certainty program.
   */
  options?: AssetReportCreateRequestOptions;
};

export const assetReportCreateRequestSchema: Schema<AssetReportCreateRequest> =
  s.object<AssetReportCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessTokens: s.optional(s.array(s.string())),
    daysRequested: s.int(),
    options: s.optional(s.lazy(() => assetReportCreateRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessTokens: "access_tokens",
      daysRequested: "days_requested",
    },
  });
