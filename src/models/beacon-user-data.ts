import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserAddressSchema, type BeaconUserAddress } from "./beacon-user-address.js";
import {
  beaconUserDepositoryAccountSchema,
  type BeaconUserDepositoryAccount,
} from "./beacon-user-depository-account.js";
import { beaconUserIdNumberSchema, type BeaconUserIdNumber } from "./beacon-user-id-number.js";
import { beaconUserNameSchema, type BeaconUserName } from "./beacon-user-name.js";

export type BeaconUserData = {
  dateOfBirth: string;
  name: BeaconUserName;
  address: BeaconUserAddress;
  emailAddress: string | null;
  phoneNumber: string | null;
  idNumber: BeaconUserIdNumber | null;
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
