import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanPaymentsCountsSchema, type LoanPaymentsCounts } from "./loan-payments-counts.js";
import {
  loanPaymentsMerchantCountsSchema,
  type LoanPaymentsMerchantCounts,
} from "./loan-payments-merchant-counts.js";

export type MonitoringLoanInsights = {
  loanPaymentsCounts: LoanPaymentsCounts;
  loanDisbursementsCount: number;
  loanPaymentMerchantsCounts: LoanPaymentsMerchantCounts;
};

export const monitoringLoanInsightsSchema: Schema<MonitoringLoanInsights> = s.object<MonitoringLoanInsights>({
  loanPaymentsCounts: loanPaymentsCountsSchema,
  loanDisbursementsCount: s.number(),
  loanPaymentMerchantsCounts: loanPaymentsMerchantCountsSchema,
  _keysMap: {
    loanPaymentsCounts: "loan_payments_counts",
    loanDisbursementsCount: "loan_disbursements_count",
    loanPaymentMerchantsCounts: "loan_payment_merchants_counts",
  },
});
