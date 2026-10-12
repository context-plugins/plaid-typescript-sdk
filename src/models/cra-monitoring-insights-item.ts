import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportAccountSchema, type BaseReportAccount } from "./base-report-account.js";
import {
  monitoringInsightsItemStatusSchema,
  type MonitoringInsightsItemStatus,
} from "./monitoring-insights-item-status.js";
import { monitoringInsightsSchema, type MonitoringInsights } from "./monitoring-insights.js";

/** An object representing a Monitoring Insights Item */
export type CraMonitoringInsightsItem = {
  /**
   * The date and time when the specific insights were generated (per-item), in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (e.g. "2018-04-12T03:32:11Z").
   */
  dateGenerated: Date;
  /** The `item_id` of the Item associated with the insights */
  itemId: string;
  /** The id of the financial institution associated with the Item. */
  institutionId: string;
  /** The full financial institution name associated with the Item. */
  institutionName: string;
  /** An object with details of the Monitoring Insights Item's status. */
  status: MonitoringInsightsItemStatus;
  /** An object representing the Monitoring Insights for the given Item */
  insights: MonitoringInsights | null;
  /** Data about each of the accounts open on the Item. */
  accounts?: BaseReportAccount[];
};

export const craMonitoringInsightsItemSchema: Schema<CraMonitoringInsightsItem> =
  s.object<CraMonitoringInsightsItem>({
    dateGenerated: s.dateTime(),
    itemId: s.string(),
    institutionId: s.string(),
    institutionName: s.string(),
    status: monitoringInsightsItemStatusSchema,
    insights: s.nullable(s.lazy(() => monitoringInsightsSchema)),
    accounts: s.optional(s.array(s.lazy(() => baseReportAccountSchema))),
    _keysMap: {
      dateGenerated: "date_generated",
      itemId: "item_id",
      institutionId: "institution_id",
      institutionName: "institution_name",
    },
  });
