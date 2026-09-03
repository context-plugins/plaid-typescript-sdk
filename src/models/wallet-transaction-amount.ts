import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isoCurrencyCodeSchema, type IsoCurrencyCode } from "./iso-currency-code.js";

export type WalletTransactionAmount = {
  isoCurrencyCode: IsoCurrencyCode;
  value: number;
};

export const walletTransactionAmountSchema: Schema<WalletTransactionAmount> =
  s.object<WalletTransactionAmount>({
    isoCurrencyCode: isoCurrencyCodeSchema,
    value: s.number(),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
    },
  });
