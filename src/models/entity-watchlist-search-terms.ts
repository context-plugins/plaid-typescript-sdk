import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Search inputs for creating an entity watchlist screening */
export type EntityWatchlistSearchTerms = {
  /** ID of the associated entity program. */
  entityWatchlistProgramId: string;
  /**
   * The name of the organization being screened. Must have at least one alphabetical character,
   * have a maximum length of 100 characters, and not include leading or trailing spaces.
   */
  legalName: string;
  /**
   * The numeric or alphanumeric identifier associated with this document. Must be between 4 and 32
   * characters long, and cannot have leading or trailing spaces.
   */
  documentNumber?: string | null;
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
  emailAddress?: string | null;
  /**
   * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO
   * 3166-1 alpha-2 form.
   */
  country?: string | null;
  /** A phone number in E.164 format. */
  phoneNumber?: string | null;
  /** An 'http' or 'https' URL (must begin with either of those). */
  url?: string | null;
};

export const entityWatchlistSearchTermsSchema: Schema<EntityWatchlistSearchTerms> =
  s.object<EntityWatchlistSearchTerms>({
    entityWatchlistProgramId: s.string(),
    legalName: s.string(),
    documentNumber: s.optionalNullable(s.string()),
    emailAddress: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      entityWatchlistProgramId: "entity_watchlist_program_id",
      legalName: "legal_name",
      documentNumber: "document_number",
      emailAddress: "email_address",
      phoneNumber: "phone_number",
    },
  });
