import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserRequestDepositoryAccount = {
  accountNumber: string;
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
