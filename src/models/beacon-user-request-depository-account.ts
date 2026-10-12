import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Depository account information for the associated user. */
export type BeaconUserRequestDepositoryAccount = {
  /** Must be a valid US Bank Account Number */
  accountNumber: string;
  /** The routing number of the account. */
  routingNumber: string;
};

export const beaconUserRequestDepositoryAccountSchema: Schema<BeaconUserRequestDepositoryAccount> =
  s.object<BeaconUserRequestDepositoryAccount>({
    accountNumber: s.string(),
    routingNumber: s.string(),
    _keysMap: {
      accountNumber: "account_number",
      routingNumber: "routing_number",
    },
  });
