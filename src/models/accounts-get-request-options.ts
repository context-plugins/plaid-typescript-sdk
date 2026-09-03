import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountsGetRequestOptions = {
  accountIds?: string[];
};

export const accountsGetRequestOptionsSchema: Schema<AccountsGetRequestOptions> =
  s.object<AccountsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
