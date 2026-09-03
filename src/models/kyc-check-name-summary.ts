import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hiddenMatchSummaryCodeSchema, type HiddenMatchSummaryCode } from "./hidden-match-summary-code.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

export type KycCheckNameSummary = {
  summary: MatchSummaryCode;
  givenName?: HiddenMatchSummaryCode;
  familyName?: HiddenMatchSummaryCode;
};

export const kycCheckNameSummarySchema: Schema<KycCheckNameSummary> = s.object<KycCheckNameSummary>({
  summary: matchSummaryCodeSchema,
  givenName: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
  familyName: s.optional(s.lazy(() => hiddenMatchSummaryCodeSchema)),
  _keysMap: {
    givenName: "given_name",
    familyName: "family_name",
  },
});
