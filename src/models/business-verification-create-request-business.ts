import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestBusinessAddressSchema, type RequestBusinessAddress } from "./request-business-address.js";

export type BusinessVerificationCreateRequestBusiness = {
  name?: string;
  alternativeName?: string | null;
  address?: RequestBusinessAddress;
  website?: string;
  phoneNumber?: string;
  emailAddress?: string;
};

export const businessVerificationCreateRequestBusinessSchema: Schema<BusinessVerificationCreateRequestBusiness> =
  s.object<BusinessVerificationCreateRequestBusiness>({
    name: s.optional(s.string()),
    alternativeName: s.optionalNullable(s.string()),
    address: s.optional(s.lazy(() => requestBusinessAddressSchema)),
    website: s.optional(s.string()),
    phoneNumber: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    _keysMap: {
      alternativeName: "alternative_name",
      phoneNumber: "phone_number",
      emailAddress: "email_address",
    },
  });
