import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityScreeningHitNamesSchema, type EntityScreeningHitNames } from "./entity-screening-hit-names.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

/** Analyzed names for the associated hit */
export type EntityScreeningHitNamesItems = {
  /** Summary object reflecting the match result of the associated data */
  analysis?: MatchSummary;
  /** Name information for the associated entity watchlist hit */
  data?: EntityScreeningHitNames;
};

export const entityScreeningHitNamesItemsSchema: Schema<EntityScreeningHitNamesItems> =
  s.object<EntityScreeningHitNamesItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityScreeningHitNamesSchema)),
  });
