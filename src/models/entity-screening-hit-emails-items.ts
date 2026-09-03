import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityScreeningHitEmailsSchema,
  type EntityScreeningHitEmails,
} from "./entity-screening-hit-emails.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

export type EntityScreeningHitEmailsItems = {
  analysis?: MatchSummary;
  data?: EntityScreeningHitEmails;
};

export const entityScreeningHitEmailsItemsSchema: Schema<EntityScreeningHitEmailsItems> =
  s.object<EntityScreeningHitEmailsItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityScreeningHitEmailsSchema)),
  });
