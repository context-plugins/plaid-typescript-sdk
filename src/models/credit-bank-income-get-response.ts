import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankIncomeSchema, type CreditBankIncome } from "./credit-bank-income.js";

/** CreditBankIncomeGetResponse defines the response schema for `/credit/bank_income/get` */
export type CreditBankIncomeGetResponse = {
  bankIncome?: CreditBankIncome[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
