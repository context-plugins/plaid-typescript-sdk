import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";
import {
  watchlistScreeningDocumentSchema,
  type WatchlistScreeningDocument,
} from "./watchlist-screening-document.js";

/** Analyzed document information for the associated hit */
export type ScreeningHitDocumentsItems = {
  /** Summary object reflecting the match result of the associated data */
  analysis?: MatchSummary;
  /**
   * An official document, usually issued by a governing body or institution, with an associated
   * identifier.
   */
  data?: WatchlistScreeningDocument;
};

export const screeningHitDocumentsItemsSchema: Schema<ScreeningHitDocumentsItems> =
  s.object<ScreeningHitDocumentsItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => watchlistScreeningDocumentSchema)),
  });
