import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeTransactionOutlierSchema,
  type CraVerificationIncomeTransactionOutlier,
} from "./cra-verification-income-transaction-outlier.js";

export type CraVerificationIncomeTransaction = {
  transactionId: string;
  itemId: string;
  accountId: string;
  amount: number;
  date: string;
  originalDescription: string;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  outlier: CraVerificationIncomeTransactionOutlier;
};

export const craVerificationIncomeTransactionSchema: Schema<CraVerificationIncomeTransaction> =
  s.object<CraVerificationIncomeTransaction>({
    transactionId: s.string(),
    itemId: s.string(),
    accountId: s.string(),
    amount: s.number(),
    date: s.dateOnly(),
    originalDescription: s.string(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    outlier: craVerificationIncomeTransactionOutlierSchema,
    _keysMap: {
      transactionId: "transaction_id",
      itemId: "item_id",
      accountId: "account_id",
      originalDescription: "original_description",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
