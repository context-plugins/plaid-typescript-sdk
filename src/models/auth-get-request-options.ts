import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthGetRequestOptions = {
  accountIds?: string[];
};

export const authGetRequestOptionsSchema: Schema<AuthGetRequestOptions> = s.object<AuthGetRequestOptions>({
  accountIds: s.optional(s.array(s.string())),
  _keysMap: {
    accountIds: "account_ids",
  },
});
