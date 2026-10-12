import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityScreeningHitPhoneNumbersSchema,
  type EntityScreeningHitPhoneNumbers,
} from "./entity-screening-hit-phone-numbers.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

/** Analyzed phone numbers for the associated hit */
export type EntityScreeningHitsPhoneNumberItems = {
  /** Summary object reflecting the match result of the associated data */
  analysis?: MatchSummary;
  /** Phone number information associated with the entity screening hit */
  data?: EntityScreeningHitPhoneNumbers;
};

export const entityScreeningHitsPhoneNumberItemsSchema: Schema<EntityScreeningHitsPhoneNumberItems> =
  s.object<EntityScreeningHitsPhoneNumberItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityScreeningHitPhoneNumbersSchema)),
  });
