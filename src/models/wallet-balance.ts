import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing the e-wallet balance */
export type WalletBalance = {
  /** The ISO-4217 currency code of the balance */
  isoCurrencyCode: string;
  /** The total amount of funds in the account */
  current: number;
  /**
   * The total amount of funds in the account after subtracting pending debit transaction amounts
   */
  available: number;
};

export const walletBalanceSchema: Schema<WalletBalance> = s.object<WalletBalance>({
  isoCurrencyCode: s.string(),
  current: s.float64(),
  available: s.float64(),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
  },
});
