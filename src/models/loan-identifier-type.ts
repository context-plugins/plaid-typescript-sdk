import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoanIdentifierType = {
  LenderLoan: "LenderLoan",
  UniversalLoan: "UniversalLoan",
} as const;
export type LoanIdentifierType = (typeof LoanIdentifierType)[keyof typeof LoanIdentifierType] | (string & {});

export const loanIdentifierTypeSchema: EnumSchema<LoanIdentifierType> =
  s.enumOf<LoanIdentifierType>(LoanIdentifierType);
