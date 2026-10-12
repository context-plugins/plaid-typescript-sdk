import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
import { investmentTransactionSchema, type InvestmentTransaction } from "./investment-transaction.js";
import { securitySchema, type Security } from "./security.js";

/**
 * ProcessorInvestmentsTransactionsGetResponse defines the response schema for
 * `/processor/investments/transactions/get`
 */
export type ProcessorInvestmentsTransactionsGetResponse = {
  /**
   * A single account at a financial institution, with additional investment-specific balance
   * information.
   */
  account: InvestmentAccount;
  /**
   * An array containing investment transactions from the account. Investments transactions are
   * returned in reverse chronological order, with the most recent at the beginning of the array.
   * The maximum number of transactions returned is determined by the `count` parameter.
   */
  investmentTransactions: InvestmentTransaction[];
  /** All securities for which there is a corresponding transaction being fetched. */
  securities: Security[];
  /**
   * The total number of transactions available within the date range specified. If
   * `total_investment_transactions` is larger than the size of the `transactions` array, more
   * transactions are available and can be fetched via manipulating the `offset` parameter.
   */
  totalInvestmentTransactions: number;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * When true, this field indicates that the Item's portfolio was manually created with the
   * Investments Fallback flow.
   */
  isInvestmentsFallbackItem?: boolean;
};

export const processorInvestmentsTransactionsGetResponseSchema: Schema<ProcessorInvestmentsTransactionsGetResponse> =
  s.object<ProcessorInvestmentsTransactionsGetResponse>({
    account: investmentAccountSchema,
    investmentTransactions: s.array(s.lazy(() => investmentTransactionSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    totalInvestmentTransactions: s.int(),
    requestId: s.string(),
    isInvestmentsFallbackItem: s.optional(s.boolean()),
    _keysMap: {
      investmentTransactions: "investment_transactions",
      totalInvestmentTransactions: "total_investment_transactions",
      requestId: "request_id",
      isInvestmentsFallbackItem: "is_investments_fallback_item",
    },
  });
