import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankIncomeCauseSchema, type CreditBankIncomeCause } from "./credit-bank-income-cause.js";
import {
  creditBankIncomeWarningCodeSchema,
  type CreditBankIncomeWarningCode,
} from "./credit-bank-income-warning-code.js";
import {
  creditBankIncomeWarningTypeSchema,
  type CreditBankIncomeWarningType,
} from "./credit-bank-income-warning-type.js";

export type CreditBankIncomeWarning = {
  warningType?: CreditBankIncomeWarningType;
  warningCode?: CreditBankIncomeWarningCode;
  cause?: CreditBankIncomeCause;
};

export const creditBankIncomeWarningSchema: Schema<CreditBankIncomeWarning> =
  s.object<CreditBankIncomeWarning>({
    warningType: s.optional(s.lazy(() => creditBankIncomeWarningTypeSchema)),
    warningCode: s.optional(s.lazy(() => creditBankIncomeWarningCodeSchema)),
    cause: s.optional(s.lazy(() => creditBankIncomeCauseSchema)),
    _keysMap: {
      warningType: "warning_type",
      warningCode: "warning_code",
    },
  });
