import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountsBalanceGetRequestOptions = {
  accountIds?: string[];
  minLastUpdatedDatetime?: Date;
};

export const accountsBalanceGetRequestOptionsSchema: Schema<AccountsBalanceGetRequestOptions> =
  s.object<AccountsBalanceGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    minLastUpdatedDatetime: s.optional(s.dateTime()),
    _keysMap: {
      accountIds: "account_ids",
      minLastUpdatedDatetime: "min_last_updated_datetime",
    },
  });
