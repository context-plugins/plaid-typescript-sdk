import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseBusinessAddressSchema, type ResponseBusinessAddress } from "./response-business-address.js";

/** The business information that was used to perform the verification search */
export type BusinessSearchTerms = {
  /**
   * The name of the business. Must have at least one character and a maximum length of 500
   * characters.
   */
  name: string | null;
  /** Alternative business names that were submitted as search inputs. */
  alternativeNames: string[];
  /** Physical address of a business. Used for response schemas. */
  address: ResponseBusinessAddress;
  /** An 'http' or 'https' URL (must begin with either of those). */
  website: string | null;
  /** A phone number in E.164 format. */
  phoneNumber: string | null;
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
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
