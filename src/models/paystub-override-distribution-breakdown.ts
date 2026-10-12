import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the accounts that the payment was distributed to. */
export type PaystubOverrideDistributionBreakdown = {
  /** Name of the account for the given distribution. */
  accountName?: string | null;
  /** The name of the bank that the payment is being deposited to. */
  bankName?: string | null;
  /** The amount distributed to this account. */
  currentAmount?: number | null;
  /**
   * The ISO-4217 currency code of the net pay. Always `null` if `unofficial_currency_code` is
   * non-null.
   */
  currency?: string | null;
  /** The last 2-4 alphanumeric characters of an account's official account number. */
  mask?: string | null;
  /** Type of the account that the paystub was sent to (e.g. 'checking'). */
  type?: string | null;
};

export const paystubOverrideDistributionBreakdownSchema: Schema<PaystubOverrideDistributionBreakdown> =
  s.object<PaystubOverrideDistributionBreakdown>({
    accountName: s.optionalNullable(s.string()),
    bankName: s.optionalNullable(s.string()),
    currentAmount: s.optionalNullable(s.float64()),
    currency: s.optionalNullable(s.string()),
    mask: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    _keysMap: {
      accountName: "account_name",
      bankName: "bank_name",
      currentAmount: "current_amount",
    },
  });
