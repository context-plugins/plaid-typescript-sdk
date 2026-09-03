import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationRequestUserNameSchema,
  type IdentityVerificationRequestUserName,
} from "./identity-verification-request-user-name.js";
import { userAddressSchema, type UserAddress } from "./user-address.js";
import { userIdNumberSchema, type UserIdNumber } from "./user-id-number.js";

export type IdentityVerificationCreateRequestUser = {
  emailAddress?: string;
  phoneNumber?: string | null;
  dateOfBirth?: string;
  name?: IdentityVerificationRequestUserName | null;
  address?: UserAddress | null;
  idNumber?: UserIdNumber | null;
  clientUserId?: string | null;
  ipAddress?: string | null;
};

export const identityVerificationCreateRequestUserSchema: Schema<IdentityVerificationCreateRequestUser> =
  s.object<IdentityVerificationCreateRequestUser>({
    emailAddress: s.optional(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    dateOfBirth: s.optional(s.dateOnly()),
    name: s.optionalNullable(s.lazy(() => identityVerificationRequestUserNameSchema)),
    address: s.optionalNullable(s.lazy(() => userAddressSchema)),
    idNumber: s.optionalNullable(s.lazy(() => userIdNumberSchema)),
    clientUserId: s.optionalNullable(s.string()),
    ipAddress: s.optionalNullable(s.string()),
    _keysMap: {
      emailAddress: "email_address",
      phoneNumber: "phone_number",
      dateOfBirth: "date_of_birth",
      idNumber: "id_number",
      clientUserId: "client_user_id",
      ipAddress: "ip_address",
    },
  });
