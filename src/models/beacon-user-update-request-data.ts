import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserIdNumberSchema, type BeaconUserIdNumber } from "./beacon-user-id-number.js";
import { beaconUserNameNullableSchema, type BeaconUserNameNullable } from "./beacon-user-name-nullable.js";
import {
  beaconUserRequestAddressNullableSchema,
  type BeaconUserRequestAddressNullable,
} from "./beacon-user-request-address-nullable.js";
import {
  beaconUserRequestDepositoryAccountSchema,
  type BeaconUserRequestDepositoryAccount,
} from "./beacon-user-request-depository-account.js";

/**
 * A subset of a Beacon User's data which is used to patch the existing identity data associated
 * with a Beacon User. At least one field must be provided. If left unset or null, user data will
 * not be patched.
 */
export type BeaconUserUpdateRequestData = {
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  dateOfBirth?: string;
  /** The full name for a given Beacon User. */
  name?: BeaconUserNameNullable | null;
  /**
   * Home address for the associated user. For more context on this field, see [Input Validation by
   * Country](https://plaid.com/docs/identity-verification/hybrid-input-validation/#input-validation-by-country).
   */
  address?: BeaconUserRequestAddressNullable | null;
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
  emailAddress?: string;
  /** A phone number in E.164 format. */
  phoneNumber?: string | null;
  /** The ID number associated with a Beacon User. */
  idNumber?: BeaconUserIdNumber | null;
  /** An IPv4 or IPv6 address. */
  ipAddress?: string | null;
  depositoryAccounts?: BeaconUserRequestDepositoryAccount[];
};

export const beaconUserUpdateRequestDataSchema: Schema<BeaconUserUpdateRequestData> =
  s.object<BeaconUserUpdateRequestData>({
    dateOfBirth: s.optional(s.dateOnly()),
    name: s.optionalNullable(s.lazy(() => beaconUserNameNullableSchema)),
    address: s.optionalNullable(s.lazy(() => beaconUserRequestAddressNullableSchema)),
    emailAddress: s.optional(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    idNumber: s.optionalNullable(s.lazy(() => beaconUserIdNumberSchema)),
    ipAddress: s.optionalNullable(s.string()),
    depositoryAccounts: s.optional(s.array(s.lazy(() => beaconUserRequestDepositoryAccountSchema))),
    _keysMap: {
      dateOfBirth: "date_of_birth",
      emailAddress: "email_address",
      phoneNumber: "phone_number",
      idNumber: "id_number",
      ipAddress: "ip_address",
      depositoryAccounts: "depository_accounts",
    },
  });
