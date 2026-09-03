import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateIndividualScreeningRequestSearchTerms = {
  watchlistProgramId?: string;
  legalName?: string;
  dateOfBirth?: string;
  documentNumber?: string;
  country?: string;
};

export const updateIndividualScreeningRequestSearchTermsSchema: Schema<UpdateIndividualScreeningRequestSearchTerms> =
  s.object<UpdateIndividualScreeningRequestSearchTerms>({
    watchlistProgramId: s.optional(s.string()),
    legalName: s.optional(s.string()),
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
