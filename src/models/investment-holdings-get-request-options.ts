import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvestmentHoldingsGetRequestOptions = {
  accountIds?: string[];
};

export const investmentHoldingsGetRequestOptionsSchema: Schema<InvestmentHoldingsGetRequestOptions> =
  s.object<InvestmentHoldingsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
