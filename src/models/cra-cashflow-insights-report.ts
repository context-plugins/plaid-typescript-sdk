import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains data for the CRA Cashflow Insights Report. */
export type CraCashflowInsightsReport = {
  /** The unique identifier associated with the report object. */
  reportId: string;
  /** The time when the report was generated. */
  generatedTime: Date;
  /**
   * A map of cash flow attributes, where the key is a string, and the value is a string, float,
   * int, or boolean. The specific list of attributes will depend on the cash flow attributes
   * version used. For a full list of attributes, contact your account manager.
   */
  attributes?: Record<string, unknown>;
};

export const craCashflowInsightsReportSchema: Schema<CraCashflowInsightsReport> =
  s.object<CraCashflowInsightsReport>({
    reportId: s.string(),
    generatedTime: s.dateTime(),
    attributes: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      reportId: "report_id",
      generatedTime: "generated_time",
    },
  });
