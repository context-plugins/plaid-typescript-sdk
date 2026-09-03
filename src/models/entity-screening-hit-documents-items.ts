import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityDocumentSchema, type EntityDocument } from "./entity-document.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

export type EntityScreeningHitDocumentsItems = {
  analysis?: MatchSummary;
  data?: EntityDocument;
};

export const entityScreeningHitDocumentsItemsSchema: Schema<EntityScreeningHitDocumentsItems> =
  s.object<EntityScreeningHitDocumentsItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityDocumentSchema)),
  });
