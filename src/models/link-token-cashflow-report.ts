import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCashflowReport = {
  daysRequested?: number;
};

export const linkTokenCashflowReportSchema: Schema<LinkTokenCashflowReport> =
  s.object<LinkTokenCashflowReport>({
    daysRequested: s.optional(s.number()),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
