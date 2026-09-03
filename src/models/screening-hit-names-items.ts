import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  individualScreeningHitNamesSchema,
  type IndividualScreeningHitNames,
} from "./individual-screening-hit-names.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

export type ScreeningHitNamesItems = {
  analysis?: MatchSummary;
  data?: IndividualScreeningHitNames;
};

export const screeningHitNamesItemsSchema: Schema<ScreeningHitNamesItems> = s.object<ScreeningHitNamesItems>({
  analysis: s.optional(s.lazy(() => matchSummarySchema)),
  data: s.optional(s.lazy(() => individualScreeningHitNamesSchema)),
});
