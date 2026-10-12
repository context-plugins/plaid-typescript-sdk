import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacLoanSchema, type CreditFreddieMacLoan } from "./credit-freddie-mac-loan.js";

/** A collection of loans that are part of a single deal. */
export type CreditFreddieMacLoans = {
  /**
   * Information specific to a mortgage loan agreement between one or more borrowers and a mortgage
   * lender.
   */
  loan: CreditFreddieMacLoan;
};

export const creditFreddieMacLoansSchema: Schema<CreditFreddieMacLoans> = s.object<CreditFreddieMacLoans>({
  loan: creditFreddieMacLoanSchema,
  _keysMap: {
    loan: "LOAN",
  },
});
