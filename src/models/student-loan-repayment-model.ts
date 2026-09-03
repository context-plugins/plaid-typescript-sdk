import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StudentLoanRepaymentModel = {
  type: string;
  nonRepaymentMonths: number;
  repaymentMonths: number;
};

export const studentLoanRepaymentModelSchema: Schema<StudentLoanRepaymentModel> =
  s.object<StudentLoanRepaymentModel>({
    type: s.string(),
    nonRepaymentMonths: s.number(),
    repaymentMonths: s.number(),
    _keysMap: {
      nonRepaymentMonths: "non_repayment_months",
      repaymentMonths: "repayment_months",
    },
  });
