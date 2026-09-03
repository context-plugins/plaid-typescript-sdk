import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
import { investmentTransactionSchema, type InvestmentTransaction } from "./investment-transaction.js";
import { itemSchema, type Item } from "./item.js";
import { securitySchema, type Security } from "./security.js";

export type InvestmentsTransactionsGetResponse = {
  item: Item;
  accounts: InvestmentAccount[];
  securities: Security[];
  investmentTransactions: InvestmentTransaction[];
  totalInvestmentTransactions: number;
  requestId: string;
  isInvestmentsFallbackItem?: boolean;
};

export const investmentsTransactionsGetResponseSchema: Schema<InvestmentsTransactionsGetResponse> =
  s.object<InvestmentsTransactionsGetResponse>({
    item: itemSchema,
    accounts: s.array(s.lazy(() => investmentAccountSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    investmentTransactions: s.array(s.lazy(() => investmentTransactionSchema)),
    totalInvestmentTransactions: s.number(),
    requestId: s.string(),
    isInvestmentsFallbackItem: s.optional(s.boolean()),
    _keysMap: {
      investmentTransactions: "investment_transactions",
      totalInvestmentTransactions: "total_investment_transactions",
      requestId: "request_id",
      isInvestmentsFallbackItem: "is_investments_fallback_item",
    },
  });
