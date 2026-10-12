import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AssetReportFilterRequest defines the request schema for `/asset_report/filter` */
export type AssetReportFilterRequest = {
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
  /** The accounts to exclude from the Asset Report, identified by `account_id`. */
  accountIdsToExclude: string[];
};

export const assetReportFilterRequestSchema: Schema<AssetReportFilterRequest> =
  s.object<AssetReportFilterRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    assetReportToken: s.string(),
    accountIdsToExclude: s.array(s.string()),
    _keysMap: {
      clientId: "client_id",
      assetReportToken: "asset_report_token",
      accountIdsToExclude: "account_ids_to_exclude",
    },
  });
