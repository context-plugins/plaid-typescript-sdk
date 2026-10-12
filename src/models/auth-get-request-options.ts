import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object to filter `/auth/get` results. */
export type AuthGetRequestOptions = {
  /**
   * A list of `account_ids` to retrieve for the Item. Note: An error will be returned if a provided
   * `account_id` is not associated with the Item.
   */
  accountIds?: string[];
};

export const authGetRequestOptionsSchema: Schema<AuthGetRequestOptions> = s.object<AuthGetRequestOptions>({
  accountIds: s.optional(s.array(s.string())),
  _keysMap: {
    accountIds: "account_ids",
  },
});
