import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningDocumentTypeSchema,
  type WatchlistScreeningDocumentType,
} from "./watchlist-screening-document-type.js";

export type WatchlistScreeningDocument = {
  type: WatchlistScreeningDocumentType;
  number: string;
};

export const watchlistScreeningDocumentSchema: Schema<WatchlistScreeningDocument> =
  s.object<WatchlistScreeningDocument>({
    type: watchlistScreeningDocumentTypeSchema,
    number: s.string(),
  });
