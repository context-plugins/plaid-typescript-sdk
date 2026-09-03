import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditAccountSchema, type CreditAccount } from "./credit-account.js";
import { depositoryAccountSchema, type DepositoryAccount } from "./depository-account.js";
import {
  investmentAccountSubtype1Schema,
  type InvestmentAccountSubtype1,
} from "./investment-account-subtype1.js";
import { loanAccountSchema, type LoanAccount } from "./loan-account.js";
import { payrollAccountSchema, type PayrollAccount } from "./payroll-account.js";

export type StandaloneAccountType = {
  depository: DepositoryAccount;
  credit: CreditAccount;
  loan: LoanAccount;
  investment: InvestmentAccountSubtype1;
  payroll?: PayrollAccount;
  other: string;
};

export const standaloneAccountTypeSchema: Schema<StandaloneAccountType> = s.object<StandaloneAccountType>({
  depository: depositoryAccountSchema,
  credit: creditAccountSchema,
  loan: loanAccountSchema,
  investment: investmentAccountSubtype1Schema,
  payroll: s.optional(s.lazy(() => payrollAccountSchema)),
  other: s.string(),
});
