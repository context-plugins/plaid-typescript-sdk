import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing data about a transaction appearing on a user-uploaded bank statement. */
export type CreditBankStatementUploadTransaction = {
  /**
   * The value of the transaction. A negative amount indicates that money moved into the account
   * (such as a paycheck being deposited).
   */
  amount: number | null;
  /** The date of when the transaction was made, in ISO 8601 format (YYYY-MM-DD). */
  date: string | null;
  /** The raw description of the transaction as it appears on the bank statement. */
  originalDescription: string | null;
  /** The unique id of the bank account that this transaction occurs in */
  accountId: string | null;
};

export const creditBankStatementUploadTransactionSchema: Schema<CreditBankStatementUploadTransaction> =
  s.object<CreditBankStatementUploadTransaction>({
    amount: s.nullable(s.float64()),
    date: s.nullable(s.dateOnly()),
    originalDescription: s.nullable(s.string()),
    accountId: s.nullable(s.string()),
    _keysMap: {
      originalDescription: "original_description",
      accountId: "account_id",
    },
  });
