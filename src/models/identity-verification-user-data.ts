import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationResponseUserNameSchema,
  type IdentityVerificationResponseUserName,
} from "./identity-verification-response-user-name.js";
import {
  identityVerificationUserAddressSchema,
  type IdentityVerificationUserAddress,
} from "./identity-verification-user-address.js";
import { userIdNumberSchema, type UserIdNumber } from "./user-id-number.js";

export type IdentityVerificationUserData = {
  phoneNumber?: string | null;
  dateOfBirth: string | null;
  ipAddress: string | null;
  emailAddress: string | null;
  name: IdentityVerificationResponseUserName | null;
  address: IdentityVerificationUserAddress | null;
  idNumber: UserIdNumber | null;
};

export const identityVerificationUserDataSchema: Schema<IdentityVerificationUserData> =
  s.object<IdentityVerificationUserData>({
    phoneNumber: s.optionalNullable(s.string()),
    dateOfBirth: s.nullable(s.dateOnly()),
    ipAddress: s.nullable(s.string()),
    emailAddress: s.nullable(s.string()),
    name: s.nullable(s.lazy(() => identityVerificationResponseUserNameSchema)),
    address: s.nullable(s.lazy(() => identityVerificationUserAddressSchema)),
    idNumber: s.nullable(s.lazy(() => userIdNumberSchema)),
    _keysMap: {
      phoneNumber: "phone_number",
      dateOfBirth: "date_of_birth",
      ipAddress: "ip_address",
      emailAddress: "email_address",
      idNumber: "id_number",
    },
  });
