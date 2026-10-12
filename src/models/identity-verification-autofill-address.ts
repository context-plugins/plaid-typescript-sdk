import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressPurposeLabelSchema, type AddressPurposeLabel } from "./address-purpose-label.js";
import { poBoxStatusSchema, type PoBoxStatus } from "./po-box-status.js";

/**
 * Even if an address has been autofilled, some fields may be null depending on the region's
 * addressing system. For example:
 *
 * Addresses from the United Kingdom will not include a region
 *
 * Addresses from Hong Kong will not include postal code
 */
export type IdentityVerificationAutofillAddress = {
  /**
   * The primary street portion of an address. If an address is provided, this field will always be
   * filled. A string with at least one non-whitespace alphabetical character, with a max length of
   * 80 characters.
   */
  street: string;
  /**
   * Extra street information, like an apartment or suite number. If provided, a string with at
   * least one non-whitespace character, with a max length of 50 characters.
   */
  street2: string | null;
  /**
   * City from the address. A string with at least one non-whitespace alphabetical character, with a
   * max length of 100 characters.
   */
  city: string | null;
  /**
   * A subdivision code. "Subdivision" is a generic term for "state", "province", "prefecture",
   * "zone", etc. For the list of valid codes, see [country subdivision
   * codes](https://plaid.com/documents/country_subdivision_codes.json). Country prefixes are
   * omitted, since they are inferred from the `country` field.
   */
  region: string | null;
  /**
   * The postal code for the associated address. Between 2 and 10 alphanumeric characters. For
   * US-based addresses this must be 5 numeric digits.
   */
  postalCode: string | null;
  /**
   * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO
   * 3166-1 alpha-2 form.
   */
  country: string;
  /**
   * Field describing whether the associated address is a post office box. Will be `yes` when a P.O.
   * box is detected, `no` when Plaid confirmed the address is not a P.O. box, and `no_data` when
   * Plaid was not able to determine if the address is a P.O. box.
   */
  poBox: PoBoxStatus;
  /**
   * Field describing whether the associated address is being used for commercial or residential
   * purposes.
   *
   * Note: This value will be `no_data` when Plaid does not have sufficient data to determine the
   * address's use.
   */
  type: AddressPurposeLabel;
};

export const identityVerificationAutofillAddressSchema: Schema<IdentityVerificationAutofillAddress> =
  s.object<IdentityVerificationAutofillAddress>({
    street: s.string(),
    street2: s.nullable(s.string()),
    city: s.nullable(s.string()),
    region: s.nullable(s.string()),
    postalCode: s.nullable(s.string()),
    country: s.string(),
    poBox: poBoxStatusSchema,
    type: addressPurposeLabelSchema,
    _keysMap: {
      postalCode: "postal_code",
      poBox: "po_box",
    },
  });
