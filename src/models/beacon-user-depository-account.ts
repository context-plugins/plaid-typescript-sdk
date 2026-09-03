import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserDepositoryAccount = {
  accountMask: string;
  routingNumber: string;
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
