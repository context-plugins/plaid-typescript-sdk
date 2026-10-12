import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningDocumentTypeSchema,
  type WatchlistScreeningDocumentType,
} from "./watchlist-screening-document-type.js";

/**
 * An official document, usually issued by a governing body or institution, with an associated
 * identifier.
 */
export type WatchlistScreeningDocument = {
  /**
   * The kind of official document represented by this object.
   *
   * `birth_certificate` - A certificate of birth
   *
   * `drivers_license` - A license to operate a motor vehicle
   *
   * `immigration_number` - Immigration or residence documents
   *
   * `military_id` - Identification issued by a military group
   *
   * `other` - Any document not covered by other categories
   *
   * `passport` - An official passport issued by a government
   *
   * `personal_identification` - Any generic personal identification that is not covered by other
   * categories
   *
   * `ration_card` - Identification that entitles the holder to rations
   *
   * `ssn` - United States Social Security Number
   *
   * `student_id` - Identification issued by an educational institution
   *
   * `tax_id` - Identification issued for the purpose of collecting taxes
   *
   * `travel_document` - Visas, entry permits, refugee documents, etc.
   *
   * `voter_id` - Identification issued for the purpose of voting
   */
  type: WatchlistScreeningDocumentType;
  /**
   * The numeric or alphanumeric identifier associated with this document. Must be between 4 and 32
   * characters long, and cannot have leading or trailing spaces.
   */
  number: string;
};

export const watchlistScreeningDocumentSchema: Schema<WatchlistScreeningDocument> =
  s.object<WatchlistScreeningDocument>({
    type: watchlistScreeningDocumentTypeSchema,
    number: s.string(),
  });
