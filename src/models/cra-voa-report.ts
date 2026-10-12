import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craVoaReportAttributesSchema, type CraVoaReportAttributes } from "./cra-voa-report-attributes.js";
import { craVoaReportItemSchema, type CraVoaReportItem } from "./cra-voa-report-item.js";

/** An object representing a VOA report. */
export type CraVoaReport = {
  /**
   * The date and time when the VOA Report was created, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (e.g. "2018-04-12T03:32:11Z").
   */
  generatedTime: Date;
  /** The number of days of transaction history that the VOA report covers. */
  daysRequested: number;
  /** Data returned by Plaid about each of the Items included in the Base Report. */
  items: CraVoaReportItem[];
  /** Attributes for the VOA report. */
  attributes: CraVoaReportAttributes;
};

export const craVoaReportSchema: Schema<CraVoaReport> = s.object<CraVoaReport>({
  generatedTime: s.dateTime(),
  daysRequested: s.float64(),
  items: s.array(s.lazy(() => craVoaReportItemSchema)),
  attributes: craVoaReportAttributesSchema,
  _keysMap: {
    generatedTime: "generated_time",
    daysRequested: "days_requested",
  },
});
