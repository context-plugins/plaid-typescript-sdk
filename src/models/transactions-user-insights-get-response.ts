import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryInsightsSchema, type CategoryInsights } from "./category-insights.js";
import { counterpartyInsightsSchema, type CounterpartyInsights } from "./counterparty-insights.js";
import { recurringTransactionsSchema, type RecurringTransactions } from "./recurring-transactions.js";
import { userDataOverviewSchema, type UserDataOverview } from "./user-data-overview.js";

export type TransactionsUserInsightsGetResponse = {
  userDataOverview: UserDataOverview;
  counterpartyInsights?: CounterpartyInsights;
  categoryInsights?: CategoryInsights;
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
