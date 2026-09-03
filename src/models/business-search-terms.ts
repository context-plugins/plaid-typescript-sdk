import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseBusinessAddressSchema, type ResponseBusinessAddress } from "./response-business-address.js";

export type BusinessSearchTerms = {
  name: string | null;
  alternativeNames: string[];
  address: ResponseBusinessAddress;
  website: string | null;
  phoneNumber: string | null;
  emailAddress: string | null;
};

export const businessSearchTermsSchema: Schema<BusinessSearchTerms> = s.object<BusinessSearchTerms>({
  name: s.nullable(s.string()),
  alternativeNames: s.array(s.string()),
  address: responseBusinessAddressSchema,
  website: s.nullable(s.string()),
  phoneNumber: s.nullable(s.string()),
  emailAddress: s.nullable(s.string()),
  _keysMap: {
    alternativeNames: "alternative_names",
    phoneNumber: "phone_number",
    emailAddress: "email_address",
  },
});
