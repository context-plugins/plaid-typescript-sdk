import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferSweep = {
  id: string;
  createdAt: Date;
  amount: string;
  isoCurrencyCode: string;
};

export const bankTransferSweepSchema: Schema<BankTransferSweep> = s.object<BankTransferSweep>({
  id: s.string(),
  createdAt: s.dateTime(),
  amount: s.string(),
  isoCurrencyCode: s.string(),
  _keysMap: {
    createdAt: "created_at",
    isoCurrencyCode: "iso_currency_code",
  },
});
