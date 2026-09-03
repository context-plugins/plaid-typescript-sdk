import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

export type EntityScreeningHitAnalysis = {
  documents?: MatchSummaryCode;
  emailAddresses?: MatchSummaryCode;
  locations?: MatchSummaryCode;
  names?: MatchSummaryCode;
  phoneNumbers?: MatchSummaryCode;
  urls?: MatchSummaryCode;
  searchTermsVersion: number;
};

export const entityScreeningHitAnalysisSchema: Schema<EntityScreeningHitAnalysis> =
  s.object<EntityScreeningHitAnalysis>({
    documents: s.optional(s.lazy(() => matchSummaryCodeSchema)),
    emailAddresses: s.optional(s.lazy(() => matchSummaryCodeSchema)),
    locations: s.optional(s.lazy(() => matchSummaryCodeSchema)),
    names: s.optional(s.lazy(() => matchSummaryCodeSchema)),
    phoneNumbers: s.optional(s.lazy(() => matchSummaryCodeSchema)),
    urls: s.optional(s.lazy(() => matchSummaryCodeSchema)),
    searchTermsVersion: s.number(),
    _keysMap: {
      emailAddresses: "email_addresses",
      phoneNumbers: "phone_numbers",
      searchTermsVersion: "search_terms_version",
    },
  });
