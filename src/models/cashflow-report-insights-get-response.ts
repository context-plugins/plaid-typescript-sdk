import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessAccountSchema, type BusinessAccount } from "./business-account.js";
import { cashflowAccountInsightsSchema, type CashflowAccountInsights } from "./cashflow-account-insights.js";
import { itemSchema, type Item } from "./item.js";

export type CashflowReportInsightsGetResponse = {
  item: Item;
  accounts: BusinessAccount[];
  accountInsights: CashflowAccountInsights;
  lastGeneratedTime: Date;
  requestId: string;
};

export const cashflowReportInsightsGetResponseSchema: Schema<CashflowReportInsightsGetResponse> =
  s.object<CashflowReportInsightsGetResponse>({
    item: itemSchema,
    accounts: s.array(s.lazy(() => businessAccountSchema)),
    accountInsights: cashflowAccountInsightsSchema,
    lastGeneratedTime: s.dateTime(),
    requestId: s.string(),
    _keysMap: {
      accountInsights: "account_insights",
      lastGeneratedTime: "last_generated_time",
      requestId: "request_id",
    },
  });
