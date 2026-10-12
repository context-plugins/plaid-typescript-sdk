import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportItemSchema, type BaseReportItem } from "./base-report-item.js";
import {
  baseReportUserAttributesSchema,
  type BaseReportUserAttributes,
} from "./base-report-user-attributes.js";

/** An object representing a Base Report */
export type BaseReport = {
  /**
   * A unique ID identifying a Base Report. Like all Plaid identifiers, this ID is case sensitive.
   */
  reportId: string;
  /**
   * The date and time when the Base Report was created, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (e.g. "2018-04-12T03:32:11Z").
   */
  dateGenerated: Date;
  /** The number of days of transaction history requested. */
  daysRequested: number;
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId?: string | null;
  /** Data returned by Plaid about each of the Items included in the Base Report. */
  items: BaseReportItem[];
  /** Calculated attributes derived from transaction-level data, aggregated across accounts. */
  attributes?: BaseReportUserAttributes;
};

export const baseReportSchema: Schema<BaseReport> = s.object<BaseReport>({
  reportId: s.string(),
  dateGenerated: s.dateTime(),
  daysRequested: s.float64(),
  clientReportId: s.optionalNullable(s.string()),
  items: s.array(s.lazy(() => baseReportItemSchema)),
  attributes: s.optional(s.lazy(() => baseReportUserAttributesSchema)),
  _keysMap: {
    reportId: "report_id",
    dateGenerated: "date_generated",
    daysRequested: "days_requested",
    clientReportId: "client_report_id",
  },
});
