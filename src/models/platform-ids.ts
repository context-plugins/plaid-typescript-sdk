import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing a set of ids related to an employee */
export type PlatformIds = {
  /** The ID of an employee as given by their employer */
  employeeId?: string | null;
  /** The ID of an employee as given by their payroll */
  payrollId?: string | null;
  /** The ID of the position of the employee */
  positionId?: string | null;
};

export const platformIdsSchema: Schema<PlatformIds> = s.object<PlatformIds>({
  employeeId: s.optionalNullable(s.string()),
  payrollId: s.optionalNullable(s.string()),
  positionId: s.optionalNullable(s.string()),
  _keysMap: {
    employeeId: "employee_id",
    payrollId: "payroll_id",
    positionId: "position_id",
  },
});
