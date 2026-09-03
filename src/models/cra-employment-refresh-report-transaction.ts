import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraEmploymentRefreshReportTransaction = {
  accountId: string;
  originalDescription: string;
  date: string;
  pending: boolean;
  transactionId: string;
};

export const craEmploymentRefreshReportTransactionSchema: Schema<CraEmploymentRefreshReportTransaction> =
  s.object<CraEmploymentRefreshReportTransaction>({
    accountId: s.string(),
    originalDescription: s.string(),
    date: s.dateOnly(),
    pending: s.boolean(),
    transactionId: s.string(),
    _keysMap: {
      accountId: "account_id",
      originalDescription: "original_description",
      transactionId: "transaction_id",
    },
  });
