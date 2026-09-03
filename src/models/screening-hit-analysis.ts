import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

export type ScreeningHitAnalysis = {
  datesOfBirth?: MatchSummaryCode;
  documents?: MatchSummaryCode;
  locations?: MatchSummaryCode;
  names?: MatchSummaryCode;
  searchTermsVersion: number;
};

export const screeningHitAnalysisSchema: Schema<ScreeningHitAnalysis> = s.object<ScreeningHitAnalysis>({
  datesOfBirth: s.optional(s.lazy(() => matchSummaryCodeSchema)),
  documents: s.optional(s.lazy(() => matchSummaryCodeSchema)),
  locations: s.optional(s.lazy(() => matchSummaryCodeSchema)),
  names: s.optional(s.lazy(() => matchSummaryCodeSchema)),
  searchTermsVersion: s.number(),
  _keysMap: {
    datesOfBirth: "dates_of_birth",
    searchTermsVersion: "search_terms_version",
  },
});
