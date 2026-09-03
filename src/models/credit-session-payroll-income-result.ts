import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditSessionPayrollIncomeResult = {
  numPaystubsRetrieved?: number;
  numW2SRetrieved?: number;
  institutionId?: string;
  institutionName?: string;
};

export const creditSessionPayrollIncomeResultSchema: Schema<CreditSessionPayrollIncomeResult> =
  s.object<CreditSessionPayrollIncomeResult>({
    numPaystubsRetrieved: s.optional(s.number()),
    numW2SRetrieved: s.optional(s.number()),
    institutionId: s.optional(s.string()),
    institutionName: s.optional(s.string()),
    _keysMap: {
      numPaystubsRetrieved: "num_paystubs_retrieved",
      numW2SRetrieved: "num_w2s_retrieved",
      institutionId: "institution_id",
      institutionName: "institution_name",
    },
  });
