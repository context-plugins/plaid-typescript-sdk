import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { investmentAccountSchema, type InvestmentAccount } from "./investment-account.js";
import { investmentTransactionSchema, type InvestmentTransaction } from "./investment-transaction.js";
import { itemSchema, type Item } from "./item.js";
import { securitySchema, type Security } from "./security.js";

/**
 * InvestmentsTransactionsGetResponse defines the response schema for
 * `/investments/transactions/get`
 */
export type InvestmentsTransactionsGetResponse = {
  /** Metadata about the Item. */
  item: Item;
  /** The accounts for which transaction history is being fetched. */
  accounts: InvestmentAccount[];
  /** All securities for which there is a corresponding transaction being fetched. */
  securities: Security[];
  /** The transactions being fetched */
  investmentTransactions: InvestmentTransaction[];
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

export const investmentsTransactionsGetResponseSchema: Schema<InvestmentsTransactionsGetResponse> =
  s.object<InvestmentsTransactionsGetResponse>({
    item: itemSchema,
    accounts: s.array(s.lazy(() => investmentAccountSchema)),
    securities: s.array(s.lazy(() => securitySchema)),
    investmentTransactions: s.array(s.lazy(() => investmentTransactionSchema)),
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
