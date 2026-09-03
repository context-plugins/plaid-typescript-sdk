import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  addressDataNullableNoRequiredFieldsSchema,
  type AddressDataNullableNoRequiredFields,
} from "./address-data-nullable-no-required-fields.js";

export type IdentityMatchUser = {
  legalName?: string | null;
  phoneNumber?: string | null;
  emailAddress?: string | null;
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
