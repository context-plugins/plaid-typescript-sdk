import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

export type MatchSummary = {
  summary: MatchSummaryCode;
};

export const matchSummarySchema: Schema<MatchSummary> = s.object<MatchSummary>({
  summary: matchSummaryCodeSchema,
});
