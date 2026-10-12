import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The object containing a set of ids related to an employee. */
export type CreditPlatformIds = {
  /** The ID of an employee as given by their employer. */
  employeeId: string | null;
  /** The ID of an employee as given by their payroll. */
  payrollId: string | null;
  /** The ID of the position of the employee. */
  positionId: string | null;
};

export const creditPlatformIdsSchema: Schema<CreditPlatformIds> = s.object<CreditPlatformIds>({
  employeeId: s.nullable(s.string()),
  payrollId: s.nullable(s.string()),
  positionId: s.nullable(s.string()),
  _keysMap: {
    employeeId: "employee_id",
    payrollId: "payroll_id",
    positionId: "position_id",
  },
});
