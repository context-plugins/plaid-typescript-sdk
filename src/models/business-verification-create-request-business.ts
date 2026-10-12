import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestBusinessAddressSchema, type RequestBusinessAddress } from "./request-business-address.js";

/** Business information provided in the verification request */
export type BusinessVerificationCreateRequestBusiness = {
  /**
   * The name of the business. Must have at least one character and a maximum length of 500
   * characters.
   */
  name?: string;
  /**
   * The name of the business. Must have at least one character and a maximum length of 500
   * characters.
   */
  alternativeName?: string | null;
  /** Physical address of a business. Used for input requests. */
  address?: RequestBusinessAddress;
  /** An 'http' or 'https' URL (must begin with either of those). */
  website?: string;
  /** A phone number in E.164 format. */
  phoneNumber?: string;
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
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
