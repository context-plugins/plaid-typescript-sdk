import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Search terms for editing an entity watchlist screening */
export type UpdateEntityScreeningRequestSearchTerms = {
  /** ID of the associated entity program. */
  entityWatchlistProgramId: string;
  /**
   * The name of the organization being screened. Must have at least one alphabetical character,
   * have a maximum length of 100 characters, and not include leading or trailing spaces.
   */
  legalName?: string;
  /**
   * The numeric or alphanumeric identifier associated with this document. Must be between 4 and 32
   * characters long, and cannot have leading or trailing spaces.
   */
  documentNumber?: string;
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
  emailAddress?: string;
  /**
   * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO
   * 3166-1 alpha-2 form.
   */
  country?: string;
  /** A phone number in E.164 format. */
  phoneNumber?: string;
  /** An 'http' or 'https' URL (must begin with either of those). */
  url?: string;
};

export const updateEntityScreeningRequestSearchTermsSchema: Schema<UpdateEntityScreeningRequestSearchTerms> =
  s.object<UpdateEntityScreeningRequestSearchTerms>({
    entityWatchlistProgramId: s.string(),
    legalName: s.optional(s.string()),
    documentNumber: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    country: s.optional(s.string()),
    phoneNumber: s.optional(s.string()),
    url: s.optional(s.string()),
    _keysMap: {
      entityWatchlistProgramId: "entity_watchlist_program_id",
      legalName: "legal_name",
      documentNumber: "document_number",
      emailAddress: "email_address",
      phoneNumber: "phone_number",
    },
  });
