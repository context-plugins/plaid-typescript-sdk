import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityMatchRequestOptions = {
  accountIds?: string[];
};

export const identityMatchRequestOptionsSchema: Schema<IdentityMatchRequestOptions> =
  s.object<IdentityMatchRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
