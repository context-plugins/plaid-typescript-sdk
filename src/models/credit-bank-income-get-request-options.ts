import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object for `/credit/bank_income/get` request options. */
export type CreditBankIncomeGetRequestOptions = {
  /**
   * How many Bank Income Reports should be fetched. Multiple reports may be available if the report
   * has been re-created or refreshed. If more than one report is available, the most recent reports
   * will be returned first.
   *
   * @default 1
   */
  count?: number;
};

export const creditBankIncomeGetRequestOptionsSchema: Schema<CreditBankIncomeGetRequestOptions> =
  s.object<CreditBankIncomeGetRequestOptions>({
    count: s.defaulted(s.int(), 1),
  });
