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

export type BeaconUserRequestData = {
  dateOfBirth?: string;
  name: BeaconUserName;
  address?: BeaconUserRequestAddress | null;
  emailAddress?: string;
  phoneNumber?: string | null;
  idNumber?: BeaconUserIdNumber | null;
  ipAddress?: string | null;
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
