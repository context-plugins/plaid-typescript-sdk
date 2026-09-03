import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityScreeningHitUrlsSchema, type EntityScreeningHitUrls } from "./entity-screening-hit-urls.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

export type EntityScreeningHitUrlsItems = {
  analysis?: MatchSummary;
  data?: EntityScreeningHitUrls;
};

export const entityScreeningHitUrlsItemsSchema: Schema<EntityScreeningHitUrlsItems> =
  s.object<EntityScreeningHitUrlsItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityScreeningHitUrlsSchema)),
  });
