import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiabilitiesGetRequestOptions = {
  accountIds?: string[];
};

export const liabilitiesGetRequestOptionsSchema: Schema<LiabilitiesGetRequestOptions> =
  s.object<LiabilitiesGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
