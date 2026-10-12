import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanPaymentsCountsSchema, type LoanPaymentsCounts } from "./loan-payments-counts.js";
import {
  loanPaymentsMerchantCountsSchema,
  type LoanPaymentsMerchantCounts,
} from "./loan-payments-merchant-counts.js";

/** An object representing the loan exposure subcategory of the report */
export type MonitoringLoanInsights = {
  /** Details regarding the number of loan payments */
  loanPaymentsCounts: LoanPaymentsCounts;
  /** The number of loan disbursements detected in the last 30 days */
  loanDisbursementsCount: number;
  /** Details regarding the number of unique loan payment merchants */
  loanPaymentMerchantsCounts: LoanPaymentsMerchantCounts;
};

export const monitoringLoanInsightsSchema: Schema<MonitoringLoanInsights> = s.object<MonitoringLoanInsights>({
  loanPaymentsCounts: loanPaymentsCountsSchema,
  loanDisbursementsCount: s.float64(),
  loanPaymentMerchantsCounts: loanPaymentsMerchantCountsSchema,
  _keysMap: {
    loanPaymentsCounts: "loan_payments_counts",
    loanDisbursementsCount: "loan_disbursements_count",
    loanPaymentMerchantsCounts: "loan_payment_merchants_counts",
  },
});
