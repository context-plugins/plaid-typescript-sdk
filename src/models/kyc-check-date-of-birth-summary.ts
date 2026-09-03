import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hiddenMatchSummaryCodeSchema, type HiddenMatchSummaryCode } from "./hidden-match-summary-code.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

export type KycCheckDateOfBirthSummary = {
  summary: MatchSummaryCode;
  day?: HiddenMatchSummaryCode;
  month?: HiddenMatchSummaryCode;
  year?: HiddenMatchSummaryCode;
};

export const kycCheckDateOfBirthSummarySchema: Schema<KycCheckDateOfBirthSummary> =
  s.object<KycCheckDateOfBirthSummary>({
    summary: matchSummaryCodeSchema,
    day: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
    month: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
    year: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
  });
