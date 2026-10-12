import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserAddressSchema, type BeaconUserAddress } from "./beacon-user-address.js";
import {
  beaconUserDepositoryAccountSchema,
  type BeaconUserDepositoryAccount,
} from "./beacon-user-depository-account.js";
import { beaconUserIdNumberSchema, type BeaconUserIdNumber } from "./beacon-user-id-number.js";
import { beaconUserNameSchema, type BeaconUserName } from "./beacon-user-name.js";

/**
 * A Beacon User's data and resulting analysis when checked against duplicate records and the Beacon
 * Fraud Network.
 */
export type BeaconUserData = {
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  dateOfBirth: string;
  /** The full name for a given Beacon User. */
  name: BeaconUserName;
  /**
   * Even if an address has been collected, some fields may be null depending on the region's
   * addressing system. For example:
   *
   *
   * Addresses from the United Kingdom will not include a region
   *
   *
   * Addresses from Hong Kong will not include a postal code
   */
  address: BeaconUserAddress;
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
  emailAddress: string | null;
  /** A phone number in E.164 format. */
  phoneNumber: string | null;
  /** The ID number associated with a Beacon User. */
  idNumber: BeaconUserIdNumber | null;
  /** An IPv4 or IPv6 address. */
  ipAddress: string | null;
  depositoryAccounts: BeaconUserDepositoryAccount[];
};

export const beaconUserDataSchema: Schema<BeaconUserData> = s.object<BeaconUserData>({
  dateOfBirth: s.dateOnly(),
  name: beaconUserNameSchema,
  address: beaconUserAddressSchema,
  emailAddress: s.nullable(s.string()),
  phoneNumber: s.nullable(s.string()),
  idNumber: s.nullable(s.lazy(() => beaconUserIdNumberSchema)),
  ipAddress: s.nullable(s.string()),
  depositoryAccounts: s.array(s.lazy(() => beaconUserDepositoryAccountSchema)),
  _keysMap: {
    dateOfBirth: "date_of_birth",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    idNumber: "id_number",
    ipAddress: "ip_address",
    depositoryAccounts: "depository_accounts",
  },
});
