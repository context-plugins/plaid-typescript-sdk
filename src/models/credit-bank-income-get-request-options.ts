import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankIncomeGetRequestOptions = {
  count?: number;
};

export const creditBankIncomeGetRequestOptionsSchema: Schema<CreditBankIncomeGetRequestOptions> =
  s.object<CreditBankIncomeGetRequestOptions>({
    count: s.optional(s.number()),
  });
