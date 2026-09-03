import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

export type BusinessFieldMatchSummary = {
  summary: MatchSummaryCode;
};

export const businessFieldMatchSummarySchema: Schema<BusinessFieldMatchSummary> =
  s.object<BusinessFieldMatchSummary>({
    summary: matchSummaryCodeSchema,
  });
