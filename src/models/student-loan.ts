import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pslfStatusSchema, type PslfStatus } from "./pslf-status.js";
import { servicerAddressDataSchema, type ServicerAddressData } from "./servicer-address-data.js";
import { studentLoanStatusSchema, type StudentLoanStatus } from "./student-loan-status.js";
import { studentRepaymentPlanSchema, type StudentRepaymentPlan } from "./student-repayment-plan.js";

export type StudentLoan = {
  accountId: string | null;
  accountNumber: string | null;
  disbursementDates: string[] | null;
  expectedPayoffDate: string | null;
  guarantor: string | null;
  interestRatePercentage: number;
  isOverdue: boolean | null;
  lastPaymentAmount: number | null;
  lastPaymentDate: string | null;
  lastStatementBalance?: number | null;
  lastStatementIssueDate: string | null;
  loanName: string | null;
  loanStatus: StudentLoanStatus;
  minimumPaymentAmount: number | null;
  nextPaymentDueDate: string | null;
  originationDate: string | null;
  originationPrincipalAmount: number | null;
  outstandingInterestAmount: number | null;
  paymentReferenceNumber: string | null;
  pslfStatus: PslfStatus;
  repaymentPlan: StudentRepaymentPlan;
  sequenceNumber: string | null;
  servicerAddress: ServicerAddressData;
  ytdInterestPaid: number | null;
  ytdPrincipalPaid: number | null;
};

export const studentLoanSchema: Schema<StudentLoan> = s.object<StudentLoan>({
  accountId: s.nullable(s.string()),
  accountNumber: s.nullable(s.string()),
  disbursementDates: s.nullable(s.array(s.dateOnly())),
  expectedPayoffDate: s.nullable(s.dateOnly()),
  guarantor: s.nullable(s.string()),
  interestRatePercentage: s.number(),
  isOverdue: s.nullable(s.boolean()),
  lastPaymentAmount: s.nullable(s.number()),
  lastPaymentDate: s.nullable(s.dateOnly()),
  lastStatementBalance: s.optionalNullable(s.number()),
  lastStatementIssueDate: s.nullable(s.dateOnly()),
  loanName: s.nullable(s.string()),
  loanStatus: studentLoanStatusSchema,
  minimumPaymentAmount: s.nullable(s.number()),
  nextPaymentDueDate: s.nullable(s.dateOnly()),
  originationDate: s.nullable(s.dateOnly()),
  originationPrincipalAmount: s.nullable(s.number()),
  outstandingInterestAmount: s.nullable(s.number()),
  paymentReferenceNumber: s.nullable(s.string()),
  pslfStatus: pslfStatusSchema,
  repaymentPlan: studentRepaymentPlanSchema,
  sequenceNumber: s.nullable(s.string()),
  servicerAddress: servicerAddressDataSchema,
  ytdInterestPaid: s.nullable(s.number()),
  ytdPrincipalPaid: s.nullable(s.number()),
  _keysMap: {
    accountId: "account_id",
    accountNumber: "account_number",
    disbursementDates: "disbursement_dates",
    expectedPayoffDate: "expected_payoff_date",
    interestRatePercentage: "interest_rate_percentage",
    isOverdue: "is_overdue",
    lastPaymentAmount: "last_payment_amount",
    lastPaymentDate: "last_payment_date",
    lastStatementBalance: "last_statement_balance",
    lastStatementIssueDate: "last_statement_issue_date",
    loanName: "loan_name",
    loanStatus: "loan_status",
    minimumPaymentAmount: "minimum_payment_amount",
    nextPaymentDueDate: "next_payment_due_date",
    originationDate: "origination_date",
    originationPrincipalAmount: "origination_principal_amount",
    outstandingInterestAmount: "outstanding_interest_amount",
    paymentReferenceNumber: "payment_reference_number",
    pslfStatus: "pslf_status",
    repaymentPlan: "repayment_plan",
    sequenceNumber: "sequence_number",
    servicerAddress: "servicer_address",
    ytdInterestPaid: "ytd_interest_paid",
    ytdPrincipalPaid: "ytd_principal_paid",
  },
});
