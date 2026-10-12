import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringInsightsStreamSchema, type RecurringInsightsStream } from "./recurring-insights-stream.js";

/**
 * Insights object for recurring transactions for `/beta/transactions/user_insights/v1/get` endpoint
 */
export type RecurringTransactions = {
  /** An array of inflow transaction streams (e.g., income). */
  inflowStreams: RecurringInsightsStream[];
  /** An array of outflow transaction streams (e.g., subscriptions, bills, loan payments). */
  outflowStreams: RecurringInsightsStream[];
};

export const recurringTransactionsSchema: Schema<RecurringTransactions> = s.object<RecurringTransactions>({
  inflowStreams: s.array(s.lazy(() => recurringInsightsStreamSchema)),
  outflowStreams: s.array(s.lazy(() => recurringInsightsStreamSchema)),
  _keysMap: {
    inflowStreams: "inflow_streams",
    outflowStreams: "outflow_streams",
  },
});
