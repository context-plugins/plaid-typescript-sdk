import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInsightsSchema, type AccountInsights } from "./account-insights.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  assetReportAccountBalanceSchema,
  type AssetReportAccountBalance,
} from "./asset-report-account-balance.js";
import { assetReportInvestmentsSchema, type AssetReportInvestments } from "./asset-report-investments.js";
import { assetReportTransactionSchema, type AssetReportTransaction } from "./asset-report-transaction.js";
import { historicalBalanceSchema, type HistoricalBalance } from "./historical-balance.js";
import { ownerSchema, type Owner } from "./owner.js";
import { ownershipTypeSchema, type OwnershipType } from "./ownership-type.js";
import { verificationStatus4Schema, type VerificationStatus4 } from "./verification-status4.js";

/** Asset information about an account */
export type AccountAssets = {
  /**
   * Plaid's unique identifier for the account. This value will not change unless Plaid can't
   * reconcile the account with the data returned by the financial institution. This may occur, for
   * example, when the name of the account changes. If this happens a new `account_id` will be
   * assigned to the account.
   *
   * The `account_id` can also change if the `access_token` is deleted and the same credentials that
   * were used to generate that `access_token` are used to generate a new `access_token` on a later
   * date. In that case, the new `account_id` will be different from the old `account_id`.
   *
   * If an account with a specific `account_id` disappears instead of changing, the account is
   * likely closed. Closed accounts are not returned by the Plaid API.
   *
   * Like all Plaid identifiers, the `account_id` is case sensitive.
   */
  accountId: string;
  /**
   * A set of fields describing the balance for an account. Balance information may be cached unless
   * the balance object was returned by `/accounts/balance/get`.
   */
  balances: AssetReportAccountBalance;
  /**
   * The last 2-4 alphanumeric characters of an account's official account number. Note that the
   * mask may be non-unique between an Item's accounts, and it may also not match the mask that the
   * bank displays to the user.
   */
  mask: string | null;
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
   * The current verification status of an Auth Item initiated through Automated or Manual
   * micro-deposits. Returned for Auth Items only.
   *
   * `pending_automatic_verification`: The Item is pending automatic verification.
   *
   * `pending_manual_verification`: The Item is pending manual micro-deposit verification. Items
   * remain in this state until the user successfully verifies the micro-deposit.
   *
   * `automatically_verified`: The Item has successfully been automatically verified.
   *
   * `manually_verified`: The Item has successfully been manually verified.
   *
   * `verification_expired`: Plaid was unable to automatically verify the deposit within 7 calendar
   * days and will no longer attempt to validate the Item. Users may retry by submitting their
   * information again through Link.
   *
   * `verification_failed`: The Item failed manual micro-deposit verification because the user
   * exhausted all 3 verification attempts. Users may retry by submitting their information again
   * through Link.
   *
   * `database_matched`: (deprecated) The Item has successfully been verified using Plaid's data
   * sources. Only returned for Auth Items created via Database Match.
   */
  verificationStatus?: VerificationStatus4;
  /**
   * A unique and persistent identifier for accounts that can be used to trace multiple instances of
   * the same account across different Items for depository accounts. This is currently an opt-in
   * field and only supported for Chase Items.
   */
  persistentAccountId?: string;
  /**
   * The duration of transaction history available within this report for this Item, typically
   * defined as the time since the date of the earliest transaction in that account.
   */
  daysAvailable: number;
  /** Transaction history associated with the account. */
  transactions: AssetReportTransaction[];
  /** A set of fields describing the investments data on an account. */
  investments?: AssetReportInvestments;
  /**
   * Data returned by the financial institution about the account owner or owners. For business
   * accounts, the name reported may be either the name of the individual or the name of the
   * business, depending on the institution. Multiple owners on a single account will be represented
   * in the same `owner` object, not in multiple owner objects within the array. In API versions
   * 2018-05-22 and earlier, the `owners` object is not returned, and instead identity information
   * is returned in the top level `identity` object. For more details, see [Plaid API
   * versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29)
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
  ownershipType?: OwnershipType | null;
  /**
   * Calculated data about the historical balances on the account.
   *
   * Available for `credit` and `depository` type accounts.
   */
  historicalBalances: HistoricalBalance[];
  /**
   * This is a container object for all lending-related insights. This field will be returned only
   * for European customers.
   */
  accountInsights?: AccountInsights | null;
};

export const accountAssetsSchema: Schema<AccountAssets> = s.object<AccountAssets>({
  accountId: s.string(),
  balances: assetReportAccountBalanceSchema,
  mask: s.nullable(s.string()),
  name: s.string(),
  officialName: s.nullable(s.string()),
  type: accountTypeSchema,
  subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
  verificationStatus: s.optional(s.lazy(() => verificationStatus4Schema)),
  persistentAccountId: s.optional(s.string()),
  daysAvailable: s.float64(),
  transactions: s.array(s.lazy(() => assetReportTransactionSchema)),
  investments: s.optional(s.lazy(() => assetReportInvestmentsSchema)),
  owners: s.array(s.lazy(() => ownerSchema)),
  ownershipType: s.optionalNullable(s.lazy(() => ownershipTypeSchema)),
  historicalBalances: s.array(s.lazy(() => historicalBalanceSchema)),
  accountInsights: s.optionalNullable(s.lazy(() => accountInsightsSchema)),
  _keysMap: {
    accountId: "account_id",
    officialName: "official_name",
    verificationStatus: "verification_status",
    persistentAccountId: "persistent_account_id",
    daysAvailable: "days_available",
    ownershipType: "ownership_type",
    historicalBalances: "historical_balances",
    accountInsights: "account_insights",
  },
});
