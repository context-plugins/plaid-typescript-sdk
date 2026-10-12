import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Student loan repayment information used to configure Sandbox test data for the Liabilities
 * product
 */
export type StudentLoanRepaymentModel = {
  /** The only currently supported value for this field is `standard`. */
  type: string;
  /** Configures the number of months before repayment starts. */
  nonRepaymentMonths: number;
  /** Configures the number of months of repayments before the loan is paid off. */
  repaymentMonths: number;
};

export const studentLoanRepaymentModelSchema: Schema<StudentLoanRepaymentModel> =
  s.object<StudentLoanRepaymentModel>({
    type: s.string(),
    nonRepaymentMonths: s.float64(),
    repaymentMonths: s.float64(),
    _keysMap: {
      nonRepaymentMonths: "non_repayment_months",
      repaymentMonths: "repayment_months",
    },
  });
