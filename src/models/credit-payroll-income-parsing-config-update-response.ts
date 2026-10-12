import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CreditPayrollIncomeParsingConfigUpdateResponse defines the response schema for
 * `/credit/payroll_income/parsing_config/update`.
 */
export type CreditPayrollIncomeParsingConfigUpdateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const creditPayrollIncomeParsingConfigUpdateResponseSchema: Schema<CreditPayrollIncomeParsingConfigUpdateResponse> =
  s.object<CreditPayrollIncomeParsingConfigUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
