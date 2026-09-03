import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningRequestSearchTerms = {
  watchlistProgramId: string;
  legalName: string;
  dateOfBirth?: string;
  documentNumber?: string;
  country?: string;
};

export const watchlistScreeningRequestSearchTermsSchema: Schema<WatchlistScreeningRequestSearchTerms> =
  s.object<WatchlistScreeningRequestSearchTerms>({
    watchlistProgramId: s.string(),
    legalName: s.string(),
    dateOfBirth: s.optional(s.dateOnly()),
    documentNumber: s.optional(s.string()),
    country: s.optional(s.string()),
    _keysMap: {
      watchlistProgramId: "watchlist_program_id",
      legalName: "legal_name",
      dateOfBirth: "date_of_birth",
      documentNumber: "document_number",
    },
  });
