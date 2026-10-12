import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessAccountSchema, type BusinessAccount } from "./business-account.js";
import { cashflowAccountInsightsSchema, type CashflowAccountInsights } from "./cashflow-account-insights.js";
import { itemSchema, type Item } from "./item.js";

/**
 * CashflowReportInsightsGetResponse defines the response schema for `/cashflow_report/insights/get`
 */
export type CashflowReportInsightsGetResponse = {
  /** Metadata about the Item. */
  item: Item;
  /**
   * An array containing the `accounts` associated with the Item for which transactions are being
   * returned. Each transaction can be mapped to its corresponding account via the `account_id`
   * field.
   */
  accounts: BusinessAccount[];
  /**
   * Insights on the account level. These are only returned for Credit and Depository type accounts.
   */
  accountInsights: CashflowAccountInsights;
  /**
   * Datetime of last Cashflow Report generation in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format ( `YYYY-MM-DDTHH:mm:ssZ` )
   */
  lastGeneratedTime: Date;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
