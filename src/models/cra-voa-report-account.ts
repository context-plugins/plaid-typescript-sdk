import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import { baseReportInvestmentsSchema, type BaseReportInvestments } from "./base-report-investments.js";
import { consumerDisputeSchema, type ConsumerDispute } from "./consumer-dispute.js";
import {
  craVoaReportAccountBalancesSchema,
  type CraVoaReportAccountBalances,
} from "./cra-voa-report-account-balances.js";
import {
  craVoaReportTransactionsInsightsSchema,
  type CraVoaReportTransactionsInsights,
} from "./cra-voa-report-transactions-insights.js";
import { ownerSchema, type Owner } from "./owner.js";
import { ownershipTypeSchema, type OwnershipType } from "./ownership-type.js";

/** VOA Report information about an account. */
export type CraVoaReportAccount = {
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
  /** VOA Report information about an account's balances. */
  balances: CraVoaReportAccountBalances;
  /** The information about previously submitted valid dispute statements by the consumer */
  consumerDisputes: ConsumerDispute[];
  /**
   * The last 2-4 alphanumeric characters of an account's official account number. Note that the
   * mask may be non-unique between an Item's accounts, and it may also not match the mask that the
   * bank displays to the user.
   */
  mask: string | null;
  /**
   * The name of the account, either assigned by the user or by the financial institution itself.
   */
  name: string;
  /** The official name of the account as given by the financial institution. */
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
  /** Transaction data associated with the account. */
  transactionsInsights: CraVoaReportTransactionsInsights;
  /** Data returned by the financial institution about the account owner or owners. */
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
  /** A set of fields describing the investments data on an account. */
  investments?: BaseReportInvestments | null;
};

export const craVoaReportAccountSchema: Schema<CraVoaReportAccount> = s.object<CraVoaReportAccount>({
  accountId: s.string(),
  balances: craVoaReportAccountBalancesSchema,
  consumerDisputes: s.array(s.lazy(() => consumerDisputeSchema)),
  mask: s.nullable(s.string()),
  name: s.string(),
  officialName: s.nullable(s.string()),
  type: accountTypeSchema,
  subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
  daysAvailable: s.float64(),
  transactionsInsights: craVoaReportTransactionsInsightsSchema,
  owners: s.array(s.lazy(() => ownerSchema)),
  ownershipType: s.nullable(s.lazy(() => ownershipTypeSchema)),
  investments: s.optionalNullable(s.lazy(() => baseReportInvestmentsSchema)),
  _keysMap: {
    accountId: "account_id",
    consumerDisputes: "consumer_disputes",
    officialName: "official_name",
    daysAvailable: "days_available",
    transactionsInsights: "transactions_insights",
    ownershipType: "ownership_type",
  },
});
