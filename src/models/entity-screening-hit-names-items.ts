import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityScreeningHitNamesSchema, type EntityScreeningHitNames } from "./entity-screening-hit-names.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

export type EntityScreeningHitNamesItems = {
  analysis?: MatchSummary;
  data?: EntityScreeningHitNames;
};

export const entityScreeningHitNamesItemsSchema: Schema<EntityScreeningHitNamesItems> =
  s.object<EntityScreeningHitNamesItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityScreeningHitNamesSchema)),
  });
