import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
import { investmentTransactionSchema, type InvestmentTransaction } from "./investment-transaction.js";
import { securitySchema, type Security } from "./security.js";

export type ProcessorInvestmentsTransactionsGetResponse = {
  account: InvestmentAccount;
  investmentTransactions: InvestmentTransaction[];
  securities: Security[];
  totalInvestmentTransactions: number;
  requestId: string;
  isInvestmentsFallbackItem?: boolean;
};

export const processorInvestmentsTransactionsGetResponseSchema: Schema<ProcessorInvestmentsTransactionsGetResponse> =
  s.object<ProcessorInvestmentsTransactionsGetResponse>({
    account: investmentAccountSchema,
    investmentTransactions: s.array(s.lazy(() => investmentTransactionSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
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
