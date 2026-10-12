import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The address extracted from the document. The address must at least contain the following fields
 * to be a valid address: `street`, `city`, `country`. If any are missing or unable to be extracted,
 * the address will be null.
 *
 * `region`, and `postal_code` may be null based on the addressing system. For example:
 *
 * Addresses from the United Kingdom will not include a region
 *
 * Addresses from Hong Kong will not include postal code
 *
 * Note: Optical Character Recognition (OCR) technology may sometimes extract incorrect data from a
 * document.
 */
export type IdentityVerificationDocumentAddressResponse = {
  /** The full street address extracted from the document. */
  street: string;
  /** City extracted from the document. */
  city: string;
  /**
   * A subdivision code extracted from the document. Related terms would be "state", "province",
   * "prefecture", "zone", "subdivision", etc. For a full list of valid codes, see [country
   * subdivision codes](https://plaid.com/documents/country_subdivision_codes.json). Country
   * prefixes are omitted, since they can be inferred from the `country` field.
   */
  region: string | null;
  /**
   * The postal code extracted from the document. Between 2 and 10 alphanumeric characters. For
   * US-based addresses this must be 5 numeric digits.
   */
  postalCode: string | null;
  /**
   * Valid, capitalized, two-letter ISO code representing the country extracted from the document.
   * Must be in ISO 3166-1 alpha-2 form.
   */
  country: string;
};

export const identityVerificationDocumentAddressResponseSchema: Schema<IdentityVerificationDocumentAddressResponse> =
  s.object<IdentityVerificationDocumentAddressResponse>({
    street: s.string(),
    city: s.string(),
    region: s.nullable(s.string()),
    postalCode: s.nullable(s.string()),
    country: s.string(),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
