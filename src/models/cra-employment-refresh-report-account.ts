import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  craEmploymentRefreshReportTransactionSchema,
  type CraEmploymentRefreshReportTransaction,
} from "./cra-employment-refresh-report-transaction.js";

/** Employment Refresh Report information about an account. */
export type CraEmploymentRefreshReportAccount = {
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
   * Transaction history associated with the account for the Employment Refresh Report. Note that
   * this transaction differs from a Base Report transaction in that it will only be deposits, and
   * the amounts will be omitted.
   */
  transactions: CraEmploymentRefreshReportTransaction[];
};

export const craEmploymentRefreshReportAccountSchema: Schema<CraEmploymentRefreshReportAccount> =
  s.object<CraEmploymentRefreshReportAccount>({
    accountId: s.string(),
    name: s.string(),
    officialName: s.nullable(s.string()),
    type: accountTypeSchema,
    subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
    transactions: s.array(s.lazy(() => craEmploymentRefreshReportTransactionSchema)),
    _keysMap: {
      accountId: "account_id",
      officialName: "official_name",
    },
  });
