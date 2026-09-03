import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userAccountIdentityAddressSchema,
  type UserAccountIdentityAddress,
} from "./user-account-identity-address.js";
import { userAccountIdentityNameSchema, type UserAccountIdentityName } from "./user-account-identity-name.js";

export type UserAccountIdentity = {
  name?: UserAccountIdentityName | null;
  address?: UserAccountIdentityAddress | null;
  phoneNumber?: string;
  email?: string | null;
  dateOfBirth?: string | null;
  ssn?: string | null;
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
