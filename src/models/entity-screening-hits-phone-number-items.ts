import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityScreeningHitPhoneNumbersSchema,
  type EntityScreeningHitPhoneNumbers,
} from "./entity-screening-hit-phone-numbers.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

export type EntityScreeningHitsPhoneNumberItems = {
  analysis?: MatchSummary;
  data?: EntityScreeningHitPhoneNumbers;
};

export const entityScreeningHitsPhoneNumberItemsSchema: Schema<EntityScreeningHitsPhoneNumberItems> =
  s.object<EntityScreeningHitsPhoneNumberItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityScreeningHitPhoneNumbersSchema)),
  });
