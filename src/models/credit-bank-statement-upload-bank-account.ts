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

export type CreditBankStatementUploadBankAccount = {
  name: string | null;
  bankName: string | null;
  accountType: string | null;
  accountNumber: string | null;
  owner: CreditBankStatementUploadAccountOwner;
  periods: CreditBankStatementUploadBankAccountPeriod[];
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
