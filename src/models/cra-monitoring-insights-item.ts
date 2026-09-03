import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportAccountSchema, type BaseReportAccount } from "./base-report-account.js";
import {
  monitoringInsightsItemStatusSchema,
  type MonitoringInsightsItemStatus,
} from "./monitoring-insights-item-status.js";
import { monitoringInsightsSchema, type MonitoringInsights } from "./monitoring-insights.js";

export type CraMonitoringInsightsItem = {
  dateGenerated: Date;
  itemId: string;
  institutionId: string;
  institutionName: string;
  status: MonitoringInsightsItemStatus;
  insights: MonitoringInsights | null;
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
