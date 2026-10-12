import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityDocumentSchema, type EntityDocument } from "./entity-document.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";

/** Analyzed documents for the associated hit */
export type EntityScreeningHitDocumentsItems = {
  /** Summary object reflecting the match result of the associated data */
  analysis?: MatchSummary;
  /**
   * An official document, usually issued by a governing body or institution, with an associated
   * identifier.
   */
  data?: EntityDocument;
};

export const entityScreeningHitDocumentsItemsSchema: Schema<EntityScreeningHitDocumentsItems> =
  s.object<EntityScreeningHitDocumentsItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => entityDocumentSchema)),
  });
