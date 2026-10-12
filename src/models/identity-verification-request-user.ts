import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationRequestUserNameSchema,
  type IdentityVerificationRequestUserName,
} from "./identity-verification-request-user-name.js";
import { userAddressSchema, type UserAddress } from "./user-address.js";
import { userIdNumberSchema, type UserIdNumber } from "./user-id-number.js";

/**
 * User information collected outside of Link, most likely via your own onboarding process.
 *
 * Each of the following identity fields are optional:
 *
 * `email_address`
 *
 * `phone_number`
 *
 * `date_of_birth`
 *
 * `name`
 *
 * `address`
 *
 * `id_number`
 *
 * Specifically, these fields are optional in that they can either be fully provided (satisfying
 * every required field in their subschema) or omitted from the request entirely by not providing
 * the key or value. Providing these fields via the API will result in Link skipping the data
 * collection process for the associated user. All verification steps enabled in the associated
 * Identity Verification Template will still be run. Verification steps will either be run
 * immediately, or once the user completes the `accept_tos` step, depending on the value provided to
 * the `gave_consent` field.
 */
export type IdentityVerificationRequestUser = {
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
  emailAddress?: string;
  /** A valid phone number in E.164 format. */
  phoneNumber?: string | null;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  dateOfBirth?: string;
  /**
   * You can use this field to pre-populate the user's legal name; if it is provided here, they will
   * not be prompted to enter their name in the identity verification attempt.
   */
  name?: IdentityVerificationRequestUserName | null;
  /**
   * Home address for the user. Supported values are: not provided, address with only country code
   * or full address.
   *
   * For more context on this field, see [Input Validation by
   * Country](https://plaid.com/docs/identity-verification/hybrid-input-validation/#input-validation-by-country).
   */
  address?: UserAddress | null;
  /**
   * ID number submitted by the user, currently used only for the Identity Verification product. If
   * the user has not submitted this data yet, this field will be `null`. Otherwise, both fields are
   * guaranteed to be filled.
   */
  idNumber?: UserIdNumber | null;
};

export const identityVerificationRequestUserSchema: Schema<IdentityVerificationRequestUser> =
  s.object<IdentityVerificationRequestUser>({
    emailAddress: s.optional(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    dateOfBirth: s.optional(s.dateOnly()),
    name: s.optionalNullable(s.lazy(() => identityVerificationRequestUserNameSchema)),
    address: s.optionalNullable(s.lazy(() => userAddressSchema)),
    idNumber: s.optionalNullable(s.lazy(() => userIdNumberSchema)),
    _keysMap: {
      emailAddress: "email_address",
      phoneNumber: "phone_number",
      dateOfBirth: "date_of_birth",
      idNumber: "id_number",
    },
  });
