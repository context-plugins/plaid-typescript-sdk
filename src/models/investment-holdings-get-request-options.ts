import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An optional object to filter `/investments/holdings/get` results. If provided, must not be
 * `null`.
 */
export type InvestmentHoldingsGetRequestOptions = {
  /**
   * An array of `account_id`s to retrieve for the Item. An error will be returned if a provided
   * `account_id` is not associated with the Item.
   */
  accountIds?: string[];
};

export const investmentHoldingsGetRequestOptionsSchema: Schema<InvestmentHoldingsGetRequestOptions> =
  s.object<InvestmentHoldingsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
