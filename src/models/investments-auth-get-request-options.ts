import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object to filter `/investments/auth/get` results. */
export type InvestmentsAuthGetRequestOptions = {
  /**
   * An array of `account_id`s to retrieve for the Item. An error will be returned if a provided
   * `account_id` is not associated with the Item.
   */
  accountIds?: string[];
};

export const investmentsAuthGetRequestOptionsSchema: Schema<InvestmentsAuthGetRequestOptions> =
  s.object<InvestmentsAuthGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
