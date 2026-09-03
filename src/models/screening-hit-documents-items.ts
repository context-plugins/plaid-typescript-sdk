import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchSummarySchema, type MatchSummary } from "./match-summary.js";
import {
  watchlistScreeningDocumentSchema,
  type WatchlistScreeningDocument,
} from "./watchlist-screening-document.js";

export type ScreeningHitDocumentsItems = {
  analysis?: MatchSummary;
  data?: WatchlistScreeningDocument;
};

export const screeningHitDocumentsItemsSchema: Schema<ScreeningHitDocumentsItems> =
  s.object<ScreeningHitDocumentsItems>({
    analysis: s.optional(s.lazy(() => matchSummarySchema)),
    data: s.optional(s.lazy(() => watchlistScreeningDocumentSchema)),
  });
