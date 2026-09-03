import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingSchema, type Holding } from "./holding.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
import { itemSchema, type Item } from "./item.js";
import { securitySchema, type Security } from "./security.js";

export type InvestmentsHoldingsGetResponse = {
  accounts: InvestmentAccount[];
  holdings: Holding[];
  securities: Security[];
  item: Item;
  requestId: string;
  isInvestmentsFallbackItem?: boolean;
};

export const investmentsHoldingsGetResponseSchema: Schema<InvestmentsHoldingsGetResponse> =
  s.object<InvestmentsHoldingsGetResponse>({
    accounts: s.array(s.lazy(() => investmentAccountSchema)),
    holdings: s.array(s.lazy(() => holdingSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    item: itemSchema,
    requestId: s.string(),
    isInvestmentsFallbackItem: s.optional(s.boolean()),
    _keysMap: {
      requestId: "request_id",
      isInvestmentsFallbackItem: "is_investments_fallback_item",
    },
  });
