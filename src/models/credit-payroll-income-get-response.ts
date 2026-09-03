import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { payrollItemSchema, type PayrollItem } from "./payroll-item.js";

export type CreditPayrollIncomeGetResponse = {
  items: PayrollItem[];
  error?: Error | null;
  requestId: string;
};

export const creditPayrollIncomeGetResponseSchema: Schema<CreditPayrollIncomeGetResponse> =
  s.object<CreditPayrollIncomeGetResponse>({
    items: s.array(s.lazy(() => payrollItemSchema)),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
