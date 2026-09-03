import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craIncomeTransactionOutlierSchema,
  type CraIncomeTransactionOutlier,
} from "./cra-income-transaction-outlier.js";

export type CraIncomeTransaction = {
  transactionId: string;
  itemId: string;
  accountId: string;
  amount: number;
  date: string;
  originalDescription: string;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  outlier: CraIncomeTransactionOutlier;
};

export const craIncomeTransactionSchema: Schema<CraIncomeTransaction> = s.object<CraIncomeTransaction>({
  transactionId: s.string(),
  itemId: s.string(),
  accountId: s.string(),
  amount: s.number(),
  date: s.dateOnly(),
  originalDescription: s.string(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  outlier: craIncomeTransactionOutlierSchema,
  _keysMap: {
    transactionId: "transaction_id",
    itemId: "item_id",
    accountId: "account_id",
    originalDescription: "original_description",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
