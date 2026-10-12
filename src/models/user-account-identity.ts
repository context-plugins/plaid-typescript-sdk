import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userAccountIdentityAddressSchema,
  type UserAccountIdentityAddress,
} from "./user-account-identity-address.js";
import { userAccountIdentityNameSchema, type UserAccountIdentityName } from "./user-account-identity-name.js";

/** The identity data permissioned by the end user during the authorization flow. */
export type UserAccountIdentity = {
  /** The user's first name and last name. */
  name?: UserAccountIdentityName | null;
  /** The user's address. */
  address?: UserAccountIdentityAddress | null;
  /** The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format */
  phoneNumber?: string;
  /**
   * The user's email address.
   *
   * Note: email is currently not returned.
   */
  email?: string | null;
  /** The user's date of birth. */
  dateOfBirth?: string | null;
  /** The user's Social Security number. */
  ssn?: string | null;
  /** The last 4 digits of the user's Social Security number. */
  ssnLast4?: string | null;
};

export const userAccountIdentitySchema: Schema<UserAccountIdentity> = s.object<UserAccountIdentity>({
  name: s.optionalNullable(s.lazy(() => userAccountIdentityNameSchema)),
  address: s.optionalNullable(s.lazy(() => userAccountIdentityAddressSchema)),
  phoneNumber: s.optional(s.string()),
  email: s.optionalNullable(s.string()),
  dateOfBirth: s.optionalNullable(s.string()),
  ssn: s.optionalNullable(s.string()),
  ssnLast4: s.optionalNullable(s.string()),
  _keysMap: {
    phoneNumber: "phone_number",
    dateOfBirth: "date_of_birth",
    ssnLast4: "ssn_last_4",
  },
});
