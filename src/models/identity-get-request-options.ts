import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityGetRequestOptions = {
  accountIds?: string[];
};

export const identityGetRequestOptionsSchema: Schema<IdentityGetRequestOptions> =
  s.object<IdentityGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
