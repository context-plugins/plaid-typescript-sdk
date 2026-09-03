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

export type BeaconUserUpdateRequestData = {
  dateOfBirth?: string;
  name?: BeaconUserNameNullable | null;
  address?: BeaconUserRequestAddressNullable | null;
  emailAddress?: string;
  phoneNumber?: string | null;
  idNumber?: BeaconUserIdNumber | null;
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
