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

export type ClientUserIdentity = {
  name?: ClientUserIdentityName | null;
  dateOfBirth?: string | null;
  emails?: ClientUserIdentityEmail[];
  phoneNumbers?: ClientUserIdentityPhoneNumber[];
  addresses?: ClientUserIdentityAddress[];
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
