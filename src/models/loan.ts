import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanIdentifiersSchema, type LoanIdentifiers } from "./loan-identifiers.js";

/**
 * Information specific to a mortgage loan agreement between one or more borrowers and a mortgage
 * lender.
 */
export type Loan = {
  /** Collection of current and previous identifiers for this loan. */
  loanIdentifiers: LoanIdentifiers;
};

export const loanSchema: Schema<Loan> = s.object<Loan>({
  loanIdentifiers: loanIdentifiersSchema,
  _keysMap: {
    loanIdentifiers: "LOAN_IDENTIFIERS",
  },
});
