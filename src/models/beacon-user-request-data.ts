import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserIdNumberSchema, type BeaconUserIdNumber } from "./beacon-user-id-number.js";
import { beaconUserNameSchema, type BeaconUserName } from "./beacon-user-name.js";
import {
  beaconUserRequestAddressSchema,
  type BeaconUserRequestAddress,
} from "./beacon-user-request-address.js";
import {
  beaconUserRequestDepositoryAccountSchema,
  type BeaconUserRequestDepositoryAccount,
} from "./beacon-user-request-depository-account.js";

/**
 * A Beacon User's data which is used to check against duplicate records and the Beacon Fraud
 * Network.
 *
 * In order to create a Beacon User, in addition to the `name`, _either_ the `date_of_birth` _or_
 * the `depository_accounts` field must be provided.
 */
export type BeaconUserRequestData = {
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  dateOfBirth?: string;
  /** The full name for a given Beacon User. */
  name: BeaconUserName;
  /**
   * Home address for the associated user. For more context on this field, see [Input Validation by
   * Country](https://plaid.com/docs/identity-verification/hybrid-input-validation/#input-validation-by-country).
   */
  address?: BeaconUserRequestAddress | null;
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
  /**
   * Provide a list of bank accounts that are associated with this Beacon User. These accounts will
   * be scanned across the Beacon Network and used to find duplicate records.
   *
   * Note: These accounts will not have Bank Account Insights. To receive Bank Account Insights
   * please supply `access_tokens`.
   */
  depositoryAccounts?: BeaconUserRequestDepositoryAccount[];
};

export const beaconUserRequestDataSchema: Schema<BeaconUserRequestData> = s.object<BeaconUserRequestData>({
  dateOfBirth: s.optional(s.dateOnly()),
  name: beaconUserNameSchema,
  address: s.optionalNullable(s.lazy(() => beaconUserRequestAddressSchema)),
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
