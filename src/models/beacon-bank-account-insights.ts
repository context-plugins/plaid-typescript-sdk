import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  beaconAccountRiskAttributesSchema,
  type BeaconAccountRiskAttributes,
} from "./beacon-account-risk-attributes.js";

export type BeaconBankAccountInsights = {
  accountId: string;
  type: AccountType;
  subtype: AccountSubtype | null;
  attributes: BeaconAccountRiskAttributes;
};

export const beaconBankAccountInsightsSchema: Schema<BeaconBankAccountInsights> =
  s.object<BeaconBankAccountInsights>({
    accountId: s.string(),
    type: accountTypeSchema,
    subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
    attributes: beaconAccountRiskAttributesSchema,
    _keysMap: {
      accountId: "account_id",
    },
  });
