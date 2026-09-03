import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeErrorTypeSchema,
  type CreditBankIncomeErrorType,
} from "./credit-bank-income-error-type.js";

export type CraBankIncomeCause = {
  errorType: CreditBankIncomeErrorType;
  errorCode: string;
  errorMessage: string;
  displayMessage: string;
};

export const craBankIncomeCauseSchema: Schema<CraBankIncomeCause> = s.object<CraBankIncomeCause>({
  errorType: creditBankIncomeErrorTypeSchema,
  errorCode: s.string(),
  errorMessage: s.string(),
  displayMessage: s.string(),
  _keysMap: {
    errorType: "error_type",
    errorCode: "error_code",
    errorMessage: "error_message",
    displayMessage: "display_message",
  },
});
