import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { idNumberSchema, type IdNumber } from "./id-number.js";
import { name2Schema, type Name2 } from "./name2.js";

export type LinkTokenCreateRequestUser = {
  clientUserId: string;
  legalName?: string;
  name?: Name2 | null;
  phoneNumber?: string;
  phoneNumberVerifiedTime?: Date | null;
  emailAddress?: string;
  emailAddressVerifiedTime?: Date | null;
  ssn?: string;
  dateOfBirth?: string | null;
  address?: Address1 | null;
  idNumber?: IdNumber | null;
};

export const linkTokenCreateRequestUserSchema: Schema<LinkTokenCreateRequestUser> =
  s.object<LinkTokenCreateRequestUser>({
    clientUserId: s.string(),
    legalName: s.optional(s.string()),
    name: s.optionalNullable(s.lazy(() => name2Schema)),
    phoneNumber: s.optional(s.string()),
    phoneNumberVerifiedTime: s.optionalNullable(s.dateTime()),
    emailAddress: s.optional(s.string()),
    emailAddressVerifiedTime: s.optionalNullable(s.dateTime()),
    ssn: s.optional(s.string()),
    dateOfBirth: s.optionalNullable(s.dateOnly()),
    address: s.optionalNullable(s.lazy(() => address1Schema)),
    idNumber: s.optionalNullable(s.lazy(() => idNumberSchema)),
    _keysMap: {
      clientUserId: "client_user_id",
      legalName: "legal_name",
      phoneNumber: "phone_number",
      phoneNumberVerifiedTime: "phone_number_verified_time",
      emailAddress: "email_address",
      emailAddressVerifiedTime: "email_address_verified_time",
      dateOfBirth: "date_of_birth",
      idNumber: "id_number",
    },
  });
