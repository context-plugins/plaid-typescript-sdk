import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringInsightsStreamSchema, type RecurringInsightsStream } from "./recurring-insights-stream.js";

export type RecurringTransactions = {
  inflowStreams: RecurringInsightsStream[];
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
