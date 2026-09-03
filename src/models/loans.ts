import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanSchema, type Loan } from "./loan.js";

export type Loans = {
  loan: Loan;
};

export const loansSchema: Schema<Loans> = s.object<Loans>({
  loan: loanSchema,
  _keysMap: {
    loan: "LOAN",
  },
});
