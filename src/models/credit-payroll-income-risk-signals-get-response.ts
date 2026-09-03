import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { payrollRiskSignalsItemSchema, type PayrollRiskSignalsItem } from "./payroll-risk-signals-item.js";

export type CreditPayrollIncomeRiskSignalsGetResponse = {
  items: PayrollRiskSignalsItem[];
  error?: Error | null;
  requestId: string;
};

export const creditPayrollIncomeRiskSignalsGetResponseSchema: Schema<CreditPayrollIncomeRiskSignalsGetResponse> =
  s.object<CreditPayrollIncomeRiskSignalsGetResponse>({
    items: s.array(s.lazy(() => payrollRiskSignalsItemSchema)),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
