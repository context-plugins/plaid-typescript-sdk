import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningSearchTerms = {
  watchlistProgramId: string;
  legalName: string;
  dateOfBirth: string | null;
  documentNumber: string | null;
  country: string | null;
  version: number;
};

export const watchlistScreeningSearchTermsSchema: Schema<WatchlistScreeningSearchTerms> =
  s.object<WatchlistScreeningSearchTerms>({
    watchlistProgramId: s.string(),
    legalName: s.string(),
    dateOfBirth: s.nullable(s.dateOnly()),
    documentNumber: s.nullable(s.string()),
    country: s.nullable(s.string()),
    version: s.number(),
    _keysMap: {
      watchlistProgramId: "watchlist_program_id",
      legalName: "legal_name",
      dateOfBirth: "date_of_birth",
      documentNumber: "document_number",
    },
  });
