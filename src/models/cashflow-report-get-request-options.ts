import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object to be used with the request. If specified, `options` must not be `null`. */
export type CashflowReportGetRequestOptions = {
  /**
   * A list of `account_ids` to retrieve for the Item
   *
   * Note: An error will be returned if a provided `account_id` is not associated with the Item.
   */
  accountIds?: string[];
};

export const cashflowReportGetRequestOptionsSchema: Schema<CashflowReportGetRequestOptions> =
  s.object<CashflowReportGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
