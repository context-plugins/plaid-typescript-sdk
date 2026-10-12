import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientUserIdentityAddressSchema,
  type ClientUserIdentityAddress,
} from "./client-user-identity-address.js";
import { clientUserIdentityEmailSchema, type ClientUserIdentityEmail } from "./client-user-identity-email.js";
import { clientUserIdentityNameSchema, type ClientUserIdentityName } from "./client-user-identity-name.js";
import {
  clientUserIdentityPhoneNumberSchema,
  type ClientUserIdentityPhoneNumber,
} from "./client-user-identity-phone-number.js";
import { userIdNumberSchema, type UserIdNumber } from "./user-id-number.js";

/**
 * The identity fields associated with a user. For a user to be eligible for a Plaid Check Consumer
 * Report, all fields are required except `id_number`. Providing a partial SSN is strongly
 * recommended, and improves the accuracy of matching user records during compliance processes such
 * as file disclosure, dispute, or security freeze requests. If creating a report that will be
 * shared with GSEs such as Fannie or Freddie, a full Social Security Number must be provided via
 * the `id_number` field.
 */
export type ClientUserIdentity = {
  /** User name information. */
  name?: ClientUserIdentityName | null;
  /** The user's date of birth, to be provided in the format "yyyy-mm-dd". */
  dateOfBirth?: string | null;
  /** The user's emails. */
  emails?: ClientUserIdentityEmail[];
  /**
   * The user's phone numbers, in E.164 format: +{countrycode}{number}. For example: "+14157452130".
   * Phone numbers provided in other formats will be parsed on a best-effort basis. Phone number
   * input is validated against valid number ranges; number strings that do not match a real-world
   * phone numbering scheme may cause the request to fail, even in the Sandbox test environment.
   */
  phoneNumbers?: ClientUserIdentityPhoneNumber[];
  /** The user's addresses. */
  addresses?: ClientUserIdentityAddress[];
  /** The user's ID numbers. */
  idNumbers?: (UserIdNumber | null)[];
};

export const clientUserIdentitySchema: Schema<ClientUserIdentity> = s.object<ClientUserIdentity>({
  name: s.optionalNullable(s.lazy(() => clientUserIdentityNameSchema)),
  dateOfBirth: s.optionalNullable(s.dateOnly()),
  emails: s.optional(s.array(s.lazy(() => clientUserIdentityEmailSchema))),
  phoneNumbers: s.optional(s.array(s.lazy(() => clientUserIdentityPhoneNumberSchema))),
  addresses: s.optional(s.array(s.lazy(() => clientUserIdentityAddressSchema))),
  idNumbers: s.optional(s.array(s.nullable(s.lazy(() => userIdNumberSchema)))),
  _keysMap: {
    dateOfBirth: "date_of_birth",
    phoneNumbers: "phone_numbers",
    idNumbers: "id_numbers",
  },
});
