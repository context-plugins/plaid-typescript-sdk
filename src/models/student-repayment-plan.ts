import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

/** An object representing the repayment plan for the student loan */
export type StudentRepaymentPlan = {
  /** The description of the repayment plan as provided by the servicer. */
  description: string | null;
  /** The type of the repayment plan. */
  type: Type3 | null;
};

export const studentRepaymentPlanSchema: Schema<StudentRepaymentPlan> = s.object<StudentRepaymentPlan>({
  description: s.nullable(s.string()),
  type: s.nullable(s.lazy(() => type3Schema)),
});
