import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementUploadAccountOwnerSchema,
  type CreditBankStatementUploadAccountOwner,
} from "./credit-bank-statement-upload-account-owner.js";
import {
  creditBankStatementUploadBankAccountPeriodSchema,
  type CreditBankStatementUploadBankAccountPeriod,
} from "./credit-bank-statement-upload-bank-account-period.js";

/** An object containing data about a user's bank account related to an uploaded bank statement. */
export type CreditBankStatementUploadBankAccount = {
  /** The name of the bank account */
  name: string | null;
  /** The name of the bank institution. */
  bankName: string | null;
  /** The type of the bank account. */
  accountType: string | null;
  /** The bank account number. */
  accountNumber: string | null;
  /**
   * An object containing data about the owner of the bank account for the uploaded bank statement.
   */
  owner: CreditBankStatementUploadAccountOwner;
  /** An array of period objects, containing more data on the overall period of the statement. */
  periods: CreditBankStatementUploadBankAccountPeriod[];
  /** The unique id of the bank account */
  accountId: string | null;
};

export const creditBankStatementUploadBankAccountSchema: Schema<CreditBankStatementUploadBankAccount> =
  s.object<CreditBankStatementUploadBankAccount>({
    name: s.nullable(s.string()),
    bankName: s.nullable(s.string()),
    accountType: s.nullable(s.string()),
    accountNumber: s.nullable(s.string()),
    owner: creditBankStatementUploadAccountOwnerSchema,
    periods: s.array(s.lazy(() => creditBankStatementUploadBankAccountPeriodSchema)),
    accountId: s.nullable(s.string()),
    _keysMap: {
      bankName: "bank_name",
      accountType: "account_type",
      accountNumber: "account_number",
      accountId: "account_id",
    },
  });
