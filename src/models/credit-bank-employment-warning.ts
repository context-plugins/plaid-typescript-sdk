import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankIncomeCauseSchema, type CreditBankIncomeCause } from "./credit-bank-income-cause.js";
import {
  creditBankIncomeWarningCodeSchema,
  type CreditBankIncomeWarningCode,
} from "./credit-bank-income-warning-code.js";

export type CreditBankEmploymentWarning = {
  warningType: "BANK_EMPLOYMENT_WARNING";
  warningCode: CreditBankIncomeWarningCode;
  cause: CreditBankIncomeCause;
};

export const creditBankEmploymentWarningSchema: Schema<CreditBankEmploymentWarning> =
  s.object<CreditBankEmploymentWarning>({
    warningType: s.literal("BANK_EMPLOYMENT_WARNING"),
    warningCode: creditBankIncomeWarningCodeSchema,
    cause: creditBankIncomeCauseSchema,
    _keysMap: {
      warningType: "warning_type",
      warningCode: "warning_code",
    },
  });
