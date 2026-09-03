import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummaryCodeSchema, type MatchSummaryCode } from "./match-summary-code.js";

export type KycCheckPhoneSummary = {
  summary: MatchSummaryCode;
  areaCode: MatchSummaryCode;
};

export const kycCheckPhoneSummarySchema: Schema<KycCheckPhoneSummary> = s.object<KycCheckPhoneSummary>({
  summary: matchSummaryCodeSchema,
  areaCode: matchSummaryCodeSchema,
  _keysMap: {
    areaCode: "area_code",
  },
});
