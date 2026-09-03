import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInsightsSchema, type AccountInsights } from "./account-insights.js";
import { assetReportItemSchema, type AssetReportItem } from "./asset-report-item.js";
import { assetReportUserSchema, type AssetReportUser } from "./asset-report-user.js";

export type AssetReport = {
  assetReportId: string;
  insights?: AccountInsights | null;
  clientReportId: string | null;
  dateGenerated: Date;
  daysRequested: number;
  user: AssetReportUser;
  items: AssetReportItem[];
};

export const assetReportSchema: Schema<AssetReport> = s.object<AssetReport>({
  assetReportId: s.string(),
  insights: s.optionalNullable(s.lazy(() => accountInsightsSchema)),
  clientReportId: s.nullable(s.string()),
  dateGenerated: s.dateTime(),
  daysRequested: s.number(),
  user: assetReportUserSchema,
  items: s.array(s.lazy(() => assetReportItemSchema)),
  _keysMap: {
    assetReportId: "asset_report_id",
    clientReportId: "client_report_id",
    dateGenerated: "date_generated",
    daysRequested: "days_requested",
  },
});
