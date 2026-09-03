import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraCashflowInsightsReport = {
  reportId: string;
  generatedTime: Date;
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
