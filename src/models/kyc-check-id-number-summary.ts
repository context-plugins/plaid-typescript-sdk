import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

export type KycCheckIdNumberSummary = {
  summary: MatchSummaryCode;
};

export const kycCheckIdNumberSummarySchema: Schema<KycCheckIdNumberSummary> =
  s.object<KycCheckIdNumberSummary>({
    summary: matchSummaryCodeSchema,
  });
