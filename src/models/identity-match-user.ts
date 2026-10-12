import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  addressDataNullableNoRequiredFieldsSchema,
  type AddressDataNullableNoRequiredFields,
} from "./address-data-nullable-no-required-fields.js";

/**
 * The user's legal name, phone number, email address and address used to perform fuzzy match. If
 * Financial Account Matching is enabled in the Identity Verification product, leave this field
 * empty to automatically match against PII collected from the Identity Verification checks.
 */
export type IdentityMatchUser = {
  /** The user's full legal name. */
  legalName?: string | null;
  /**
   * The user's phone number, in E.164 format: +{countrycode}{number}. For example: "+14157452130".
   * Phone numbers provided in other formats will be parsed on a best-effort basis. Phone number
   * input is validated against valid number ranges; number strings that do not match a real-world
   * phone numbering scheme may cause the request to fail, even in the Sandbox test environment.
   */
  phoneNumber?: string | null;
  /** The user's email address. */
  emailAddress?: string | null;
  /** Data about the components comprising an address. */
  address?: AddressDataNullableNoRequiredFields | null;
};

export const identityMatchUserSchema: Schema<IdentityMatchUser> = s.object<IdentityMatchUser>({
  legalName: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.lazy(() => addressDataNullableNoRequiredFieldsSchema)),
  _keysMap: {
    legalName: "legal_name",
    phoneNumber: "phone_number",
    emailAddress: "email_address",
  },
});
