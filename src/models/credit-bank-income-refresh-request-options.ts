import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankIncomeRefreshRequestOptions = {
  daysRequested?: number;
};

export const creditBankIncomeRefreshRequestOptionsSchema: Schema<CreditBankIncomeRefreshRequestOptions> =
  s.object<CreditBankIncomeRefreshRequestOptions>({
    daysRequested: s.optional(s.number()),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
