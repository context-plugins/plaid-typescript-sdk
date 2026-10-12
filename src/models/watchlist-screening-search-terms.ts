import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Search terms for creating an individual watchlist screening */
export type WatchlistScreeningSearchTerms = {
  /** ID of the associated program. */
  watchlistProgramId: string;
  /**
   * The legal name of the individual being screened. Must have at least one alphabetical character,
   * have a maximum length of 100 characters, and not include leading or trailing spaces.
   */
  legalName: string;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  dateOfBirth: string | null;
  /**
   * The numeric or alphanumeric identifier associated with this document. Must be between 4 and 32
   * characters long, and cannot have leading or trailing spaces.
   */
  documentNumber: string | null;
  /**
   * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO
   * 3166-1 alpha-2 form.
   */
  country: string | null;
  /**
   * The current version of the search terms. Starts at `1` and increments with each edit to
   * `search_terms`.
   */
  version: number;
};

export const watchlistScreeningSearchTermsSchema: Schema<WatchlistScreeningSearchTerms> =
  s.object<WatchlistScreeningSearchTerms>({
    watchlistProgramId: s.string(),
    legalName: s.string(),
    dateOfBirth: s.nullable(s.dateOnly()),
    documentNumber: s.nullable(s.string()),
    country: s.nullable(s.string()),
    version: s.int(),
    _keysMap: {
      watchlistProgramId: "watchlist_program_id",
      legalName: "legal_name",
      dateOfBirth: "date_of_birth",
      documentNumber: "document_number",
    },
  });
