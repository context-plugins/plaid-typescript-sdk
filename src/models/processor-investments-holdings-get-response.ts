import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingSchema, type Holding } from "./holding.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
import { securitySchema, type Security } from "./security.js";

export type ProcessorInvestmentsHoldingsGetResponse = {
  account: InvestmentAccount;
  holdings: Holding[];
  securities: Security[];
  isInvestmentsFallbackItem?: boolean;
  requestId?: string;
};

export const processorInvestmentsHoldingsGetResponseSchema: Schema<ProcessorInvestmentsHoldingsGetResponse> =
  s.object<ProcessorInvestmentsHoldingsGetResponse>({
    account: investmentAccountSchema,
    holdings: s.array(s.lazy(() => holdingSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    isInvestmentsFallbackItem: s.optional(s.boolean()),
    requestId: s.optional(s.string()),
    _keysMap: {
      isInvestmentsFallbackItem: "is_investments_fallback_item",
      requestId: "request_id",
    },
  });
