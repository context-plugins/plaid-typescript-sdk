import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  beaconAccountRiskEvaluateAccountAttributesSchema,
  type BeaconAccountRiskEvaluateAccountAttributes,
} from "./beacon-account-risk-evaluate-account-attributes.js";

export type BeaconAccountRiskEvaluateAccount = {
  accountId?: string;
  type?: AccountType;
  subtype?: AccountSubtype | null;
  attributes?: BeaconAccountRiskEvaluateAccountAttributes;
};

export const beaconAccountRiskEvaluateAccountSchema: Schema<BeaconAccountRiskEvaluateAccount> =
  s.object<BeaconAccountRiskEvaluateAccount>({
    accountId: s.optional(s.string()),
    type: s.optional(s.lazy(() => accountTypeSchema)),
    subtype: s.optionalNullable(s.lazy(() => accountSubtypeSchema)),
    attributes: s.optional(s.lazy(() => beaconAccountRiskEvaluateAccountAttributesSchema)),
    _keysMap: {
      accountId: "account_id",
    },
  });
