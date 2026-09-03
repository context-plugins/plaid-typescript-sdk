import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanIdentifiersSchema, type LoanIdentifiers } from "./loan-identifiers.js";

export type Loan = {
  loanIdentifiers: LoanIdentifiers;
};

export const loanSchema: Schema<Loan> = s.object<Loan>({
  loanIdentifiers: loanIdentifiersSchema,
  _keysMap: {
    loanIdentifiers: "LOAN_IDENTIFIERS",
  },
});
