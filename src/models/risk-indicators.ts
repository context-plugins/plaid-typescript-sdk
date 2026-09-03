import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankPenaltiesIndicatorsSchema, type BankPenaltiesIndicators } from "./bank-penalties-indicators.js";
import { gamblingIndicatorsSchema, type GamblingIndicators } from "./gambling-indicators.js";
import {
  loanDisbursementsIndicatorsSchema,
  type LoanDisbursementsIndicators,
} from "./loan-disbursements-indicators.js";
import { loanPaymentsIndicatorsSchema, type LoanPaymentsIndicators } from "./loan-payments-indicators.js";
import { negativeBalanceInsightsSchema, type NegativeBalanceInsights } from "./negative-balance-insights.js";

export type RiskIndicators = {
  bankPenalties?: BankPenaltiesIndicators | null;
  gambling?: GamblingIndicators | null;
  loanDisbursements?: LoanDisbursementsIndicators | null;
  loanPayments?: LoanPaymentsIndicators | null;
  negativeBalance?: NegativeBalanceInsights | null;
};

export const riskIndicatorsSchema: Schema<RiskIndicators> = s.object<RiskIndicators>({
  bankPenalties: s.optionalNullable(s.lazy(() => bankPenaltiesIndicatorsSchema)),
  gambling: s.optionalNullable(s.lazy(() => gamblingIndicatorsSchema)),
  loanDisbursements: s.optionalNullable(s.lazy(() => loanDisbursementsIndicatorsSchema)),
  loanPayments: s.optionalNullable(s.lazy(() => loanPaymentsIndicatorsSchema)),
  negativeBalance: s.optionalNullable(s.lazy(() => negativeBalanceInsightsSchema)),
  _keysMap: {
    bankPenalties: "bank_penalties",
    loanDisbursements: "loan_disbursements",
    loanPayments: "loan_payments",
    negativeBalance: "negative_balance",
  },
});
