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

/**
 * The identity data that was either collected from the user or provided via API in order to perform
 * an Identity Verification.
 */
export type IdentityVerificationUserData = {
  /** A valid phone number in E.164 format. */
  phoneNumber?: string | null;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  dateOfBirth: string | null;
  /** An IPv4 or IPv6 address. */
  ipAddress: string | null;
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
  emailAddress: string | null;
  /**
   * The full name provided by the user. If the user has not submitted their name, this field will
   * be null. Otherwise, both fields are guaranteed to be filled.
   */
  name: IdentityVerificationResponseUserName | null;
  /**
   * Even if an address has been collected, some fields may be null depending on the region's
   * addressing system. For example:
   *
   * Addresses from the United Kingdom will not include a region
   *
   * Addresses from Hong Kong will not include postal code
   */
  address: IdentityVerificationUserAddress | null;
  /**
   * ID number submitted by the user, currently used only for the Identity Verification product. If
   * the user has not submitted this data yet, this field will be `null`. Otherwise, both fields are
   * guaranteed to be filled.
   */
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
