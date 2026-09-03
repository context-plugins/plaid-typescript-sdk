import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvestmentsAuthGetRequestOptions = {
  accountIds?: string[];
};

export const investmentsAuthGetRequestOptionsSchema: Schema<InvestmentsAuthGetRequestOptions> =
  s.object<InvestmentsAuthGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
