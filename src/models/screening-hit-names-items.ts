import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  individualScreeningHitNamesSchema,
  type IndividualScreeningHitNames,
} from "./individual-screening-hit-names.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

/** Analyzed name information for the associated hit */
export type ScreeningHitNamesItems = {
  /** Summary object reflecting the match result of the associated data */
  analysis?: MatchSummary;
  /** Name information for the associated individual watchlist hit */
  data?: IndividualScreeningHitNames;
};

export const screeningHitNamesItemsSchema: Schema<ScreeningHitNamesItems> = s.object<ScreeningHitNamesItems>({
  analysis: s.optional(s.lazy(() => matchSummarySchema)),
  data: s.optional(s.lazy(() => individualScreeningHitNamesSchema)),
});
