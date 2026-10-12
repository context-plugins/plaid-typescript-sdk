import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Home address of a person */
export type TransferPlatformPersonAddress = {
  /** The full city name. */
  city: string;
  /**
   * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO
   * 3166-1 alpha-2 form.
   */
  country: string;
  /** The postal code of the address. */
  postalCode: string;
  /**
   * An ISO 3166-2 subdivision code. Related terms would be "state", "province", "prefecture",
   * "zone", "subdivision", etc.
   */
  region: string;
  /**
   * The primary street portion of an address. A string with at least one non-whitespace
   * alphabetical character, with a max length of 80 characters.
   */
  street: string;
  /**
   * Extra street information, like an apartment or suite number. If provided, a string with at
   * least one non-whitespace character, with a max length of 50 characters.
   */
  street2?: string;
};

export const transferPlatformPersonAddressSchema: Schema<TransferPlatformPersonAddress> =
  s.object<TransferPlatformPersonAddress>({
    city: s.string(),
    country: s.string(),
    postalCode: s.string(),
    region: s.string(),
    street: s.string(),
    street2: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
