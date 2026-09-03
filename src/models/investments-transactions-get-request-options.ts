import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvestmentsTransactionsGetRequestOptions = {
  accountIds?: string[];
  count?: number;
  offset?: number;
  asyncUpdate?: boolean;
};

export const investmentsTransactionsGetRequestOptionsSchema: Schema<InvestmentsTransactionsGetRequestOptions> =
  s.object<InvestmentsTransactionsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    count: s.optional(s.number()),
    offset: s.optional(s.number()),
    asyncUpdate: s.optional(s.boolean()),
    _keysMap: {
      accountIds: "account_ids",
      asyncUpdate: "async_update",
    },
  });
