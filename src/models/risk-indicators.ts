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

/**
 * Risk indicators focus on providing signal on the possibility of a borrower defaulting on their
 * loan repayments by providing data points related to its payment behavior, debt, and other
 * relevant financial information, helping lenders gauge the level of risk involved in a certain
 * operation.
 */
export type RiskIndicators = {
  /**
   * Insights into bank penalties and fees, including overdraft fees, NSF fees, and other
   * bank-imposed charges.
   */
  bankPenalties?: BankPenaltiesIndicators | null;
  /**
   * Insights into gambling-related transactions, including frequency, amounts, and top merchants.
   */
  gambling?: GamblingIndicators | null;
  /**
   * Insights into loan disbursement transactions received by the user, tracking incoming funds from
   * loan providers.
   */
  loanDisbursements?: LoanDisbursementsIndicators | null;
  /**
   * Insights into loan payment transactions made by the user, tracking outgoing payments to loan
   * providers.
   */
  loanPayments?: LoanPaymentsIndicators | null;
  /**
   * Insights into negative balance occurrences, including frequency, duration, and minimum balance
   * details.
   */
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
