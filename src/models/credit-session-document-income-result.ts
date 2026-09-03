import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditSessionDocumentIncomeResult = {
  numPaystubsUploaded: number;
  numW2SUploaded: number;
  numBankStatementsUploaded: number;
  num1099SUploaded: number;
  numI20SUploaded: number;
};

export const creditSessionDocumentIncomeResultSchema: Schema<CreditSessionDocumentIncomeResult> =
  s.object<CreditSessionDocumentIncomeResult>({
    numPaystubsUploaded: s.number(),
    numW2SUploaded: s.number(),
    numBankStatementsUploaded: s.number(),
    num1099SUploaded: s.number(),
    numI20SUploaded: s.number(),
    _keysMap: {
      numPaystubsUploaded: "num_paystubs_uploaded",
      numW2SUploaded: "num_w2s_uploaded",
      numBankStatementsUploaded: "num_bank_statements_uploaded",
      num1099SUploaded: "num_1099s_uploaded",
      numI20SUploaded: "num_i20s_uploaded",
    },
  });
