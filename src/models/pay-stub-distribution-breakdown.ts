import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the accounts that the payment was distributed to. */
export type PayStubDistributionBreakdown = {
  /** Name of the account for the given distribution. */
  accountName: string | null;
  /** The name of the bank that the payment is being deposited to. */
  bankName: string | null;
  /** The amount distributed to this account. */
  currentAmount: number | null;
  /**
   * The ISO-4217 currency code of the net pay. Always `null` if `unofficial_currency_code` is
   * non-null.
   */
  isoCurrencyCode: string | null;
  /** The last 2-4 alphanumeric characters of an account's official account number. */
  mask: string | null;
  /** Type of the account that the paystub was sent to (e.g. 'checking'). */
  type: string | null;
  /**
   * The unofficial currency code associated with the net pay. Always `null` if `iso_currency_code`
   * is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO
   * currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
};

export const payStubDistributionBreakdownSchema: Schema<PayStubDistributionBreakdown> =
  s.object<PayStubDistributionBreakdown>({
    accountName: s.nullable(s.string()),
    bankName: s.nullable(s.string()),
    currentAmount: s.nullable(s.float64()),
    isoCurrencyCode: s.nullable(s.string()),
    mask: s.nullable(s.string()),
    type: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      accountName: "account_name",
      bankName: "bank_name",
      currentAmount: "current_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
