import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInsightsSchema, type AccountInsights } from "./account-insights.js";
import { assetReportItemSchema, type AssetReportItem } from "./asset-report-item.js";
import { assetReportUserSchema, type AssetReportUser } from "./asset-report-user.js";

/** An object representing an Asset Report */
export type AssetReport = {
  /**
   * A unique ID identifying an Asset Report. Like all Plaid identifiers, this ID is case sensitive.
   */
  assetReportId: string;
  /**
   * This is a container object for all lending-related insights. This field will be returned only
   * for European customers.
   */
  insights?: AccountInsights | null;
  /** An identifier you determine and submit for the Asset Report. */
  clientReportId: string | null;
  /**
   * The date and time when the Asset Report was created, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (e.g. "2018-04-12T03:32:11Z").
   */
  dateGenerated: Date;
  /** The duration of transaction history you requested */
  daysRequested: number;
  /**
   * The user object allows you to provide additional information about the user to be appended to
   * the Asset Report. All fields are optional. The `first_name`, `last_name`, and `ssn` fields are
   * required if you would like the Report to be eligible for Fannie Mae's Day 1 Certainty™ program.
   */
  user: AssetReportUser;
  /** Data returned by Plaid about each of the Items included in the Asset Report. */
  items: AssetReportItem[];
};

export const assetReportSchema: Schema<AssetReport> = s.object<AssetReport>({
  assetReportId: s.string(),
  insights: s.optionalNullable(s.lazy(() => accountInsightsSchema)),
  clientReportId: s.nullable(s.string()),
  dateGenerated: s.dateTime(),
  daysRequested: s.float64(),
  user: assetReportUserSchema,
  items: s.array(s.lazy(() => assetReportItemSchema)),
  _keysMap: {
    assetReportId: "asset_report_id",
    clientReportId: "client_report_id",
    dateGenerated: "date_generated",
    daysRequested: "days_requested",
  },
});
