import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of a document income verification in Link */
export type CreditSessionDocumentIncomeResult = {
  /** The number of paystubs uploaded by the user. */
  numPaystubsUploaded: number;
  /** The number of w2s uploaded by the user. */
  numW2SUploaded: number;
  /** The number of bank statements uploaded by the user. */
  numBankStatementsUploaded: number;
  /** The number of 1099s uploaded by the user */
  num1099SUploaded: number;
  /** The number of I-20s uploaded by the user */
  numI20SUploaded: number;
};

export const creditSessionDocumentIncomeResultSchema: Schema<CreditSessionDocumentIncomeResult> =
  s.object<CreditSessionDocumentIncomeResult>({
    numPaystubsUploaded: s.int(),
    numW2SUploaded: s.int(),
    numBankStatementsUploaded: s.int(),
    num1099SUploaded: s.int(),
    numI20SUploaded: s.int(),
    _keysMap: {
      numPaystubsUploaded: "num_paystubs_uploaded",
      numW2SUploaded: "num_w2s_uploaded",
      numBankStatementsUploaded: "num_bank_statements_uploaded",
      num1099SUploaded: "num_1099s_uploaded",
      numI20SUploaded: "num_i20s_uploaded",
    },
  });
