import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
 */
export type LiabilitiesGetRequestOptions = {
  /**
   * A list of accounts to retrieve for the Item.
   *
   * An error will be returned if a provided `account_id` is not associated with the Item
   */
  accountIds?: string[];
};

export const liabilitiesGetRequestOptionsSchema: Schema<LiabilitiesGetRequestOptions> =
  s.object<LiabilitiesGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
