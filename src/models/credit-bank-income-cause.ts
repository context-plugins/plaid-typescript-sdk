import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeErrorTypeSchema,
  type CreditBankIncomeErrorType,
} from "./credit-bank-income-error-type.js";

export type CreditBankIncomeCause = {
  errorType: CreditBankIncomeErrorType;
  errorCode: string;
  errorMessage: string;
  displayMessage: string;
  itemId: string;
};

export const creditBankIncomeCauseSchema: Schema<CreditBankIncomeCause> = s.object<CreditBankIncomeCause>({
  errorType: creditBankIncomeErrorTypeSchema,
  errorCode: s.string(),
  errorMessage: s.string(),
  displayMessage: s.string(),
  itemId: s.string(),
  _keysMap: {
    errorType: "error_type",
    errorCode: "error_code",
    errorMessage: "error_message",
    displayMessage: "display_message",
    itemId: "item_id",
  },
});
