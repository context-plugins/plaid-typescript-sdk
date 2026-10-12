import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityScreeningHitEmailsSchema,
  type EntityScreeningHitEmails,
} from "./entity-screening-hit-emails.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

/** Analyzed emails for the associated hit */
export type EntityScreeningHitEmailsItems = {
  /** Summary object reflecting the match result of the associated data */
  analysis?: MatchSummary;
  /** Email address information for the associated entity watchlist hit */
  data?: EntityScreeningHitEmails;
};

export const entityScreeningHitEmailsItemsSchema: Schema<EntityScreeningHitEmailsItems> =
  s.object<EntityScreeningHitEmailsItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityScreeningHitEmailsSchema)),
  });
