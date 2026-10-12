import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object to filter `/accounts/get` results. */
export type AccountsGetRequestOptions = {
  /** An array of `account_ids` to retrieve for the Account. */
  accountIds?: string[];
};

export const accountsGetRequestOptionsSchema: Schema<AccountsGetRequestOptions> =
  s.object<AccountsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
