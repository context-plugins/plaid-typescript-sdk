import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconBankAccountInsightsSchema,
  type BeaconBankAccountInsights,
} from "./beacon-bank-account-insights.js";

/** A collection of Bank Accounts linked to an Item that is associated with this Beacon User. */
export type BeaconBankAccounts = {
  /** The Plaid Item ID the Bank Accounts belong to. */
  itemId: string;
  accounts: BeaconBankAccountInsights[];
};

export const beaconBankAccountsSchema: Schema<BeaconBankAccounts> = s.object<BeaconBankAccounts>({
  itemId: s.string(),
  accounts: s.array(s.lazy(() => beaconBankAccountInsightsSchema)),
  _keysMap: {
    itemId: "item_id",
  },
});
