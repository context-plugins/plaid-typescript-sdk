import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditPayrollIncomeParsingConfigUpdateResponse = {
  requestId: string;
};

export const creditPayrollIncomeParsingConfigUpdateResponseSchema: Schema<CreditPayrollIncomeParsingConfigUpdateResponse> =
  s.object<CreditPayrollIncomeParsingConfigUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
