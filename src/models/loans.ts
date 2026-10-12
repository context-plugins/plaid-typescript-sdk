import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanSchema, type Loan } from "./loan.js";

/** A collection of loans that are part of a single deal. */
export type Loans = {
  /**
   * Information specific to a mortgage loan agreement between one or more borrowers and a mortgage
   * lender.
   */
  loan: Loan;
};

export const loansSchema: Schema<Loans> = s.object<Loans>({
  loan: loanSchema,
  _keysMap: {
    loan: "LOAN",
  },
});
