import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  beaconAccountRiskEvaluateAccountAttributesSchema,
  type BeaconAccountRiskEvaluateAccountAttributes,
} from "./beacon-account-risk-evaluate-account-attributes.js";

/** An account in the `/beacon/account_risk/v1/evaluate` response. */
export type BeaconAccountRiskEvaluateAccount = {
  /** The account ID. */
  accountId?: string;
  /**
   * `investment:` Investment account. In API versions 2018-05-22 and earlier, this type is called
   * `brokerage` instead.
   *
   * `credit:` Credit card
   *
   * `depository:` Depository account
   *
   * `loan:` Loan account
   *
   * `other:` Non-specified account type
   *
   * See the [Account type schema](https://plaid.com/docs/api/accounts#account-type-schema) for a
   * full listing of account types and corresponding subtypes.
   */
  type?: AccountType;
  /**
   * See the [Account type schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a
   * full listing of account types and corresponding subtypes.
   */
  subtype?: AccountSubtype | null;
  /**
   * The attributes object contains data that can be used to assess account risk. Examples of data
   * include: `days_since_first_plaid_connection`: The number of days since the first time the Item
   * was connected to an application via Plaid `plaid_connections_count_7d`: The number of times the
   * Item has been connected to applications via Plaid over the past 7 days
   * `plaid_connections_count_30d`: The number of times the Item has been connected to applications
   * via Plaid over the past 30 days `total_plaid_connections_count`: The number of times the Item
   * has been connected to applications via Plaid For the full list and detailed documentation of
   * core attributes available, or to request that core attributes not be returned, contact sales or
   * your Plaid account manager
   */
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
