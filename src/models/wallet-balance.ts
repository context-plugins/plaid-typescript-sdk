import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletBalance = {
  isoCurrencyCode: string;
  current: number;
  available: number;
};

export const walletBalanceSchema: Schema<WalletBalance> = s.object<WalletBalance>({
  isoCurrencyCode: s.string(),
  current: s.number(),
  available: s.number(),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
  },
});
