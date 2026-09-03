import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankIncomeSchema, type CreditBankIncome } from "./credit-bank-income.js";

export type CreditBankIncomeGetResponse = {
  bankIncome?: CreditBankIncome[];
  requestId: string;
};

export const creditBankIncomeGetResponseSchema: Schema<CreditBankIncomeGetResponse> =
  s.object<CreditBankIncomeGetResponse>({
    bankIncome: s.optional(s.array(s.lazy(() => creditBankIncomeSchema))),
    requestId: s.string(),
    _keysMap: {
      bankIncome: "bank_income",
      requestId: "request_id",
    },
  });
