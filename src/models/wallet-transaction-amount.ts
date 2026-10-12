import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isoCurrencyCodeSchema, type IsoCurrencyCode } from "./iso-currency-code.js";

/** The amount and currency of a transaction */
export type WalletTransactionAmount = {
  /** An ISO-4217 currency code, used with e-wallets and transactions. */
  isoCurrencyCode: IsoCurrencyCode;
  /** The amount of the transaction. Must contain at most two digits of precision e.g. `1.23`. */
  value: number;
};

export const walletTransactionAmountSchema: Schema<WalletTransactionAmount> =
  s.object<WalletTransactionAmount>({
    isoCurrencyCode: isoCurrencyCodeSchema,
    value: s.float64(),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
    },
  });
