import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionStreamAmount = {
  amount?: number;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
};

export const transactionStreamAmountSchema: Schema<TransactionStreamAmount> =
  s.object<TransactionStreamAmount>({
    amount: s.optional(s.number()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
