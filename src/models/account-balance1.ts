import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A set of fields describing the balance for an account. For real-time values, use
 * `/accounts/balance/get` or `/signal/evaluate` (with a Balance-only ruleset), which are fetched
 * live from the institution at request time. Values returned by other endpoints may be cached, or
 * adjusted by Plaid to reflect transaction activity received since the last refresh.
 */
export type AccountBalance1 = {
  /**
   * The amount of funds available to be withdrawn from the account, as determined by the financial
   * institution.
   *
   * For `credit`-type accounts, the `available` balance typically equals the `limit` less the
   * `current` balance, less any pending outflows plus any pending inflows.
   *
   * For `depository`-type accounts, the `available` balance typically equals the `current` balance
   * less any pending outflows plus any pending inflows. For `depository`-type accounts, the
   * `available` balance does not include the overdraft limit.
   *
   * For `investment`-type accounts (or `brokerage`-type accounts for API versions 2018-05-22 and
   * earlier), the `available` balance is the total cash available to withdraw as presented by the
   * institution.
   *
   * Note that not all institutions calculate the `available` balance. In the event that `available`
   * balance is unavailable, Plaid will return an `available` balance value of `null`.
   *
   * Available balance may be cached and is not guaranteed to be up-to-date in real-time unless the
   * value was returned by `/accounts/balance/get`, or by `/signal/evaluate` with a Balance-only
   * ruleset.
   *
   * If `current` is `null` this field is guaranteed not to be `null`, unless you have opted into
   * enabling [limited-purpose checking
   * accounts](https://plaid.com/docs/auth/#enabling-limited-purpose-checking-accounts-for-rent-or-mortgage),
   * which always have `null` values for both `available` and `current` balance.
   */
  available: number | null;
  /**
   * The total amount of funds in or owed by the account.
   *
   * For `credit`-type accounts, a positive balance indicates the amount owed; a negative amount
   * indicates the lender owing the account holder.
   *
   * For `loan`-type accounts, the current balance is the principal remaining on the loan, except in
   * the case of student loan accounts at Sallie Mae (`ins_116944`). For Sallie Mae student loans,
   * the account's balance includes both principal and any outstanding interest. Similar to
   * `credit`-type accounts, a positive balance is typically expected, while a negative amount
   * indicates the lender owing the account holder.
   *
   * For `investment`-type accounts (or `brokerage`-type accounts for API versions 2018-05-22 and
   * earlier), the current balance is the total value of assets as presented by the institution.
   *
   * Note that balance information may be cached unless the value was returned by
   * `/accounts/balance/get` or by `/signal/evaluate` with a Balance-only ruleset; if the Item is
   * enabled for Transactions, the balance will be at least as recent as the most recent Transaction
   * update. If you require real-time balance information, use the `available` balance as provided
   * by `/accounts/balance/get` or `/signal/evaluate` called with a Balance-only `ruleset_key`.
   *
   * When returned by `/accounts/balance/get`, this field may be `null`. When this happens,
   * `available` is guaranteed not to be `null`, unless you have opted into enabling
   * [limited-purpose checking
   * accounts](https://plaid.com/docs/auth/#enabling-limited-purpose-checking-accounts-for-rent-or-mortgage),
   * which always have `null` values for both `available` and `current` balance.
   */
  current: number | null;
  /**
   * For `credit`-type accounts, this represents the credit limit.
   *
   * For `depository`-type accounts, this represents the pre-arranged overdraft limit, which is
   * common for current (checking) accounts in Europe.
   *
   * In North America, this field is typically only available for `credit`-type accounts.
   */
  limit: number | null;
  /**
   * The ISO-4217 currency code of the balance. Always null if `unofficial_currency_code` is
   * non-null.
   */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the balance. Always null if `iso_currency_code` is
   * non-null. Unofficial currency codes are used for currencies that do not have official ISO
   * currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
  /**
   * Timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`)
   * indicating the last time the balance was updated.
   *
   * This field is returned only when the institution is `ins_128026` (Capital One).
   */
  lastUpdatedDatetime?: Date | null;
  /**
   * The total amount of borrowed funds in the account, as determined by the financial institution.
   * For investment-type accounts, the margin balance is the total value of borrowed assets in the
   * account, as presented by the institution. This is commonly referred to as margin or a loan.
   */
  marginLoanAmount: number | null;
};

export const accountBalance1Schema: Schema<AccountBalance1> = s.object<AccountBalance1>({
  available: s.nullable(s.float64()),
  current: s.nullable(s.float64()),
  limit: s.nullable(s.float64()),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  lastUpdatedDatetime: s.optionalNullable(s.dateTime()),
  marginLoanAmount: s.nullable(s.float64()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    lastUpdatedDatetime: "last_updated_datetime",
    marginLoanAmount: "margin_loan_amount",
  },
});
