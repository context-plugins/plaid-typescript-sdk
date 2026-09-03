import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type StudentRepaymentPlan = {
  description: string | null;
  type: Type3 | null;
};

export const studentRepaymentPlanSchema: Schema<StudentRepaymentPlan> = s.object<StudentRepaymentPlan>({
  description: s.nullable(s.string()),
  type: s.nullable(s.lazy(() => type3Schema)),
});
