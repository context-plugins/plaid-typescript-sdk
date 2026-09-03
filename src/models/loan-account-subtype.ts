import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoanAccountSubtype = {
  Auto: "auto",
  Business: "business",
  Commercial: "commercial",
  Construction: "construction",
  Consumer: "consumer",
  HomeEquity: "home equity",
  Loan: "loan",
  Mortgage: "mortgage",
  Overdraft: "overdraft",
  LineOfCredit: "line of credit",
  Student: "student",
  Other: "other",
  All: "all",
} as const;
export type LoanAccountSubtype = (typeof LoanAccountSubtype)[keyof typeof LoanAccountSubtype] | (string & {});

export const loanAccountSubtypeSchema: EnumSchema<LoanAccountSubtype> =
  s.enumOf<LoanAccountSubtype>(LoanAccountSubtype);
