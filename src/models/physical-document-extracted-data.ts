import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationDocumentAddressResponseSchema,
  type IdentityVerificationDocumentAddressResponse,
} from "./identity-verification-document-address-response.js";
import {
  identityVerificationDocumentNameResponseSchema,
  type IdentityVerificationDocumentNameResponse,
} from "./identity-verification-document-name-response.js";
import {
  physicalDocumentCategorySchema,
  type PhysicalDocumentCategory,
} from "./physical-document-category.js";

/** Data extracted from a user-submitted document. */
export type PhysicalDocumentExtractedData = {
  /** Alpha-numeric ID number extracted via OCR from the user's document image. */
  idNumber: string | null;
  /**
   * The type of identity document detected in the images provided. Will always be one of the
   * following values:
   *
   * `drivers_license` - A driver's license issued by the associated country, establishing identity
   * without any guarantee as to citizenship, and granting driving privileges
   *
   * `id_card` - A general national identification card, distinct from driver's licenses as it only
   * establishes identity
   *
   * `passport` - A travel passport issued by the associated country for one of its citizens
   *
   * `residence_permit_card` - An identity document issued by the associated country permitting a
   * foreign citizen to <em>temporarily</em> reside there
   *
   * `resident_card` - An identity document issued by the associated country permitting a foreign
   * citizen to <em>permanently</em> reside there
   *
   * `visa` - An identity document issued by the associated country permitting a foreign citizen
   * entry for a short duration and for a specific purpose, typically no longer than 6 months
   *
   * Note: This value may be different from the ID type that the user selects within Link. For
   * example, if they select "Driver's License" but then submit a picture of a passport, this field
   * will say `passport`
   */
  category: PhysicalDocumentCategory;
  /** The expiration date of the document in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  expirationDate: string | null;
  /** The issue date of the document in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  issueDate: string | null;
  /**
   * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO
   * 3166-1 alpha-2 form.
   */
  issuingCountry: string;
  /**
   * A subdivision code. "Subdivision" is a generic term for "state", "province", "prefecture",
   * "zone", etc. For the list of valid codes, see [country subdivision
   * codes](https://plaid.com/documents/country_subdivision_codes.json). Country prefixes are
   * omitted, since they are inferred from the `country` field.
   */
  issuingRegion: string | null;
  /** A date extracted from the document in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  dateOfBirth: string | null;
  /**
   * The address extracted from the document. The address must at least contain the following fields
   * to be a valid address: `street`, `city`, `country`. If any are missing or unable to be
   * extracted, the address will be null.
   *
   * `region`, and `postal_code` may be null based on the addressing system. For example:
   *
   * Addresses from the United Kingdom will not include a region
   *
   * Addresses from Hong Kong will not include postal code
   *
   * Note: Optical Character Recognition (OCR) technology may sometimes extract incorrect data from
   * a document.
   */
  address: IdentityVerificationDocumentAddressResponse | null;
  /** The individual's name extracted from the document. */
  name?: IdentityVerificationDocumentNameResponse | null;
};

export const physicalDocumentExtractedDataSchema: Schema<PhysicalDocumentExtractedData> =
  s.object<PhysicalDocumentExtractedData>({
    idNumber: s.nullable(s.string()),
    category: physicalDocumentCategorySchema,
    expirationDate: s.nullable(s.dateOnly()),
    issueDate: s.nullable(s.dateOnly()),
    issuingCountry: s.string(),
    issuingRegion: s.nullable(s.string()),
    dateOfBirth: s.nullable(s.dateOnly()),
    address: s.nullable(s.lazy(() => identityVerificationDocumentAddressResponseSchema)),
    name: s.optionalNullable(s.lazy(() => identityVerificationDocumentNameResponseSchema)),
    _keysMap: {
      idNumber: "id_number",
      expirationDate: "expiration_date",
      issueDate: "issue_date",
      issuingCountry: "issuing_country",
      issuingRegion: "issuing_region",
      dateOfBirth: "date_of_birth",
    },
  });
