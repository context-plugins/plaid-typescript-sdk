import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditPlatformIds = {
  employeeId: string | null;
  payrollId: string | null;
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
