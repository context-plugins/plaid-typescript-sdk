import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craBankIncomeCauseSchema, type CraBankIncomeCause } from "./cra-bank-income-cause.js";
import {
  craBankIncomeWarningCodeSchema,
  type CraBankIncomeWarningCode,
} from "./cra-bank-income-warning-code.js";
import {
  creditBankIncomeWarningTypeSchema,
  type CreditBankIncomeWarningType,
} from "./credit-bank-income-warning-type.js";

export type CraBankIncomeWarning = {
  warningType?: CreditBankIncomeWarningType;
  warningCode?: CraBankIncomeWarningCode;
  cause?: CraBankIncomeCause;
};

export const craBankIncomeWarningSchema: Schema<CraBankIncomeWarning> = s.object<CraBankIncomeWarning>({
  warningType: s.optional(s.lazy(() => creditBankIncomeWarningTypeSchema)),
  warningCode: s.optional(s.lazy(() => craBankIncomeWarningCodeSchema)),
  cause: s.optional(s.lazy(() => craBankIncomeCauseSchema)),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
  },
});
