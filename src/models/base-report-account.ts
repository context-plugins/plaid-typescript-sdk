import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  baseReportAccountBalancesSchema,
  type BaseReportAccountBalances,
} from "./base-report-account-balances.js";
import {
  baseReportAccountInsightsSchema,
  type BaseReportAccountInsights,
} from "./base-report-account-insights.js";
import {
  baseReportAccountMetadataSchema,
  type BaseReportAccountMetadata,
} from "./base-report-account-metadata.js";
import { baseReportAttributesSchema, type BaseReportAttributes } from "./base-report-attributes.js";
import {
  baseReportHistoricalBalanceSchema,
  type BaseReportHistoricalBalance,
} from "./base-report-historical-balance.js";
import { baseReportTransactionSchema, type BaseReportTransaction } from "./base-report-transaction.js";
import { consumerDisputeSchema, type ConsumerDispute } from "./consumer-dispute.js";
import { ownerSchema, type Owner } from "./owner.js";
import { ownershipTypeSchema, type OwnershipType } from "./ownership-type.js";

/** Base Report information about an account */
export type BaseReportAccount = {
  /**
   * Plaid's unique identifier for the account. This value will not change unless Plaid can't
   * reconcile the account with the data returned by the financial institution. This may occur, for
   * example, when the name of the account changes. If this happens a new `account_id` will be
   * assigned to the account.
   *
   * If an account with a specific `account_id` disappears instead of changing, the account is
   * likely closed. Closed accounts are not returned by the Plaid API.
   *
   * Like all Plaid identifiers, the `account_id` is case sensitive.
   */
  accountId: string;
  /** Information about an account's balances. */
  balances: BaseReportAccountBalances;
  /** The information about previously submitted valid dispute statements by the consumer */
  consumerDisputes: ConsumerDispute[];
  /**
   * The last 2-4 alphanumeric characters of an account's official account number. Note that the
   * mask may be non-unique between an Item's accounts, and it may also not match the mask that the
   * bank displays to the user.
   */
  mask: string | null;
  /** Metadata about the extracted account. */
  metadata: BaseReportAccountMetadata;
  /** The name of the account, either assigned by the user or by the financial institution itself */
  name: string;
  /** The official name of the account as given by the financial institution */
  officialName: string | null;
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
   * The duration of transaction history available within this report for this Item, typically
   * defined as the time since the date of the earliest transaction in that account.
   */
  daysAvailable: number;
  /**
   * Transaction history associated with the account. Transaction history returned by endpoints such
   * as `/transactions/get` or `/investments/transactions/get` will be returned in the top-level
   * `transactions` field instead. Some transactions may have their details masked in accordance to
   * the FCRA. These will appear with a `credit_category` of `MASKED_TRANSACTION_CATEGORY`.
   */
  transactions: BaseReportTransaction[];
  /**
   * Data returned by the financial institution about the account owner or owners. For business
   * accounts, the name reported may be either the name of the individual or the name of the
   * business, depending on the institution. Multiple owners on a single account will be represented
   * in the same `owner` object, not in multiple owner objects within the array. This array can also
   * be empty if no owners are found.
   */
  owners: Owner[];
  /**
   * How an asset is owned.
   *
   * `association`: Ownership by a corporation, partnership, or unincorporated association,
   * including for-profit and not-for-profit organizations. `individual`: Ownership by an
   * individual. `joint`: Joint ownership by multiple parties. `trust`: Ownership by a revocable or
   * irrevocable trust.
   */
  ownershipType: OwnershipType | null;
  /**
   * Calculated data about the historical balances on the account. Currently not supported by
   * `brokerage` or `investment` accounts.
   */
  historicalBalances?: BaseReportHistoricalBalance[];
  /**
   * Calculated insights derived from transaction-level data. This field has been deprecated in
   * favor of [Base Report attributes aggregated across
   * accounts](https://plaid.com/docs/api/products/check/#cra-check_report-base_report-get-response-report-attributes)
   * and will be removed in a future release.
   *
   * @deprecated
   */
  accountInsights?: BaseReportAccountInsights;
  /** Calculated attributes derived from transaction-level data. */
  attributes?: BaseReportAttributes;
};

export const baseReportAccountSchema: Schema<BaseReportAccount> = s.object<BaseReportAccount>({
  accountId: s.string(),
  balances: baseReportAccountBalancesSchema,
  consumerDisputes: s.array(s.lazy(() => consumerDisputeSchema)),
  mask: s.nullable(s.string()),
  metadata: baseReportAccountMetadataSchema,
  name: s.string(),
  officialName: s.nullable(s.string()),
  type: accountTypeSchema,
  subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
  daysAvailable: s.float64(),
  transactions: s.array(s.lazy(() => baseReportTransactionSchema)),
  owners: s.array(s.lazy(() => ownerSchema)),
  ownershipType: s.nullable(s.lazy(() => ownershipTypeSchema)),
  historicalBalances: s.optional(s.array(s.lazy(() => baseReportHistoricalBalanceSchema))),
  accountInsights: s.optional(s.lazy(() => baseReportAccountInsightsSchema)),
  attributes: s.optional(s.lazy(() => baseReportAttributesSchema)),
  _keysMap: {
    accountId: "account_id",
    consumerDisputes: "consumer_disputes",
    officialName: "official_name",
    daysAvailable: "days_available",
    ownershipType: "ownership_type",
    historicalBalances: "historical_balances",
    accountInsights: "account_insights",
  },
});
