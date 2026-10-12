import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Depository account information for the associated user. */
export type BeaconUserDepositoryAccount = {
  /** The last 2-4 numeric characters of this account's account number. */
  accountMask: string;
  /** The routing number of the account. */
  routingNumber: string;
  /** An ISO8601 formatted timestamp. */
  addedAt: Date;
};

export const beaconUserDepositoryAccountSchema: Schema<BeaconUserDepositoryAccount> =
  s.object<BeaconUserDepositoryAccount>({
    accountMask: s.string(),
    routingNumber: s.string(),
    addedAt: s.dateTime(),
    _keysMap: {
      accountMask: "account_mask",
      routingNumber: "routing_number",
      addedAt: "added_at",
    },
  });
