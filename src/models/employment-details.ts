import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paySchema, type Pay } from "./pay.js";

/** An object representing employment details found on a paystub. */
export type EmploymentDetails = {
  /**
   * An object representing a monetary amount.
   *
   * @deprecated
   */
  annualSalary?: Pay;
  /** Date on which the employee was hired, in the YYYY-MM-DD format. */
  hireDate?: string | null;
};

export const employmentDetailsSchema: Schema<EmploymentDetails> = s.object<EmploymentDetails>({
  annualSalary: s.optional(s.lazy(() => paySchema)),
  hireDate: s.optionalNullable(s.dateOnly()),
  _keysMap: {
    annualSalary: "annual_salary",
    hireDate: "hire_date",
  },
});
