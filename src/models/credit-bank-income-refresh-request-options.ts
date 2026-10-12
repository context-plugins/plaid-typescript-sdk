import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object for `/credit/bank_income/refresh` request options. */
export type CreditBankIncomeRefreshRequestOptions = {
  /**
   * How many days of data to include in the refresh. If not specified, this will default to the
   * days requested in the most recently generated bank income report for the user.
   */
  daysRequested?: number;
};

export const creditBankIncomeRefreshRequestOptionsSchema: Schema<CreditBankIncomeRefreshRequestOptions> =
  s.object<CreditBankIncomeRefreshRequestOptions>({
    daysRequested: s.optional(s.int()),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
