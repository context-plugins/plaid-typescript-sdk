import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  beaconAccountRiskAttributesSchema,
  type BeaconAccountRiskAttributes,
} from "./beacon-account-risk-attributes.js";

/**
 * Bank Account Insights encapsulate the risk insights for a single Bank Account linked to an Item
 * that is associated with a Beacon User.
 */
export type BeaconBankAccountInsights = {
  /** The Plaid `account_id` */
  accountId: string;
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
  type: AccountType;
  /**
   * See the [Account type schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a
   * full listing of account types and corresponding subtypes.
   */
  subtype: AccountSubtype | null;
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
