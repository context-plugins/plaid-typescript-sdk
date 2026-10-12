import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A loan type account. */
export const LoanAccount = {
  Auto: "auto",
  Business: "business",
  Commercial: "commercial",
  Construction: "construction",
  Consumer: "consumer",
  HomeEquity: "home equity",
  LineOfCredit: "line of credit",
  Loan: "loan",
  Mortgage: "mortgage",
  Other: "other",
  Overdraft: "overdraft",
  Student: "student",
} as const;
export type LoanAccount = (typeof LoanAccount)[keyof typeof LoanAccount] | (string & {});

export const loanAccountSchema: EnumSchema<LoanAccount> = s.enumOf<LoanAccount>(LoanAccount);
