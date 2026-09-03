import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconBankAccountInsightsSchema,
  type BeaconBankAccountInsights,
} from "./beacon-bank-account-insights.js";

export type BeaconBankAccounts = {
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
