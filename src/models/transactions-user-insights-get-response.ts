import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryInsightsSchema, type CategoryInsights } from "./category-insights.js";
import { counterpartyInsightsSchema, type CounterpartyInsights } from "./counterparty-insights.js";
import { recurringTransactionsSchema, type RecurringTransactions } from "./recurring-transactions.js";
import { userDataOverviewSchema, type UserDataOverview } from "./user-data-overview.js";

/**
 * TransactionsUserInsightsGetResponse defines the response schema for
 * `/beta/transactions/user_insights/v1/get`.
 */
export type TransactionsUserInsightsGetResponse = {
  /** metadata for the set of insights provided in `TransactionsUserInsightsGetResponse` */
  userDataOverview: UserDataOverview;
  /** Insights around a user's counterparties */
  counterpartyInsights?: CounterpartyInsights;
  /** Insights on a user's top personal finance categories. */
  categoryInsights?: CategoryInsights;
  /**
   * Insights object for recurring transactions for `/beta/transactions/user_insights/v1/get`
   * endpoint
   */
  recurringTransactions?: RecurringTransactions;
};

export const transactionsUserInsightsGetResponseSchema: Schema<TransactionsUserInsightsGetResponse> =
  s.object<TransactionsUserInsightsGetResponse>({
    userDataOverview: userDataOverviewSchema,
    counterpartyInsights: s.optional(s.lazy(() => counterpartyInsightsSchema)),
    categoryInsights: s.optional(s.lazy(() => categoryInsightsSchema)),
    recurringTransactions: s.optional(s.lazy(() => recurringTransactionsSchema)),
    _keysMap: {
      userDataOverview: "user_data_overview",
      counterpartyInsights: "counterparty_insights",
      categoryInsights: "category_insights",
      recurringTransactions: "recurring_transactions",
    },
  });
