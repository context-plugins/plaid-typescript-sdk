import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformIds = {
  employeeId?: string | null;
  payrollId?: string | null;
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
