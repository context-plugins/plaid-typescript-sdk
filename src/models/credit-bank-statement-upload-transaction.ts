import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankStatementUploadTransaction = {
  amount: number | null;
  date: string | null;
  originalDescription: string | null;
  accountId: string | null;
};

export const creditBankStatementUploadTransactionSchema: Schema<CreditBankStatementUploadTransaction> =
  s.object<CreditBankStatementUploadTransaction>({
    amount: s.nullable(s.number()),
    date: s.nullable(s.dateOnly()),
    originalDescription: s.nullable(s.string()),
    accountId: s.nullable(s.string()),
    _keysMap: {
      originalDescription: "original_description",
      accountId: "account_id",
    },
  });
