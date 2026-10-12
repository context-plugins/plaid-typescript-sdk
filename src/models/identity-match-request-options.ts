import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object to filter `/identity/match` results */
export type IdentityMatchRequestOptions = {
  /** An array of `account_ids` to perform fuzzy match */
  accountIds?: string[];
};

export const identityMatchRequestOptionsSchema: Schema<IdentityMatchRequestOptions> =
  s.object<IdentityMatchRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
