import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of a digital payroll income verification in Link */
export type CreditSessionPayrollIncomeResult = {
  /** The number of paystubs retrieved from a payroll provider. */
  numPaystubsRetrieved?: number;
  /** The number of w2s retrieved from a payroll provider. */
  numW2SRetrieved?: number;
  /** The Plaid Institution ID associated with the Item. */
  institutionId?: string;
  /** The Institution Name associated with the Item. */
  institutionName?: string;
};

export const creditSessionPayrollIncomeResultSchema: Schema<CreditSessionPayrollIncomeResult> =
  s.object<CreditSessionPayrollIncomeResult>({
    numPaystubsRetrieved: s.optional(s.int()),
    numW2SRetrieved: s.optional(s.int()),
    institutionId: s.optional(s.string()),
    institutionName: s.optional(s.string()),
    _keysMap: {
      numPaystubsRetrieved: "num_paystubs_retrieved",
      numW2SRetrieved: "num_w2s_retrieved",
      institutionId: "institution_id",
      institutionName: "institution_name",
    },
  });
