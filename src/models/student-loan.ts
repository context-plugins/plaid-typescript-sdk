import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pslfStatusSchema, type PslfStatus } from "./pslf-status.js";
import { servicerAddressDataSchema, type ServicerAddressData } from "./servicer-address-data.js";
import { studentLoanStatusSchema, type StudentLoanStatus } from "./student-loan-status.js";
import { studentRepaymentPlanSchema, type StudentRepaymentPlan } from "./student-repayment-plan.js";

/** Contains details about a student loan account */
export type StudentLoan = {
  /**
   * The ID of the account that this liability belongs to. Each account can only contain one
   * liability.
   */
  accountId: string | null;
  /**
   * The account number of the loan. For some institutions, this may be a masked version of the
   * number (e.g., the last 4 digits instead of the entire number).
   */
  accountNumber: string | null;
  /**
   * The dates on which loaned funds were disbursed or will be disbursed. These are often in the
   * past. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format
   * (YYYY-MM-DD).
   */
  disbursementDates: string[] | null;
  /**
   * The date when the student loan is expected to be paid off. Availability for this field is
   * limited. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format
   * (YYYY-MM-DD).
   */
  expectedPayoffDate: string | null;
  /** The guarantor of the student loan. */
  guarantor: string | null;
  /** The interest rate on the loan as a percentage. */
  interestRatePercentage: number;
  /** `true` if a payment is currently overdue. Availability for this field is limited. */
  isOverdue: boolean | null;
  /** The amount of the last payment. */
  lastPaymentAmount: number | null;
  /**
   * The date of the last payment. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  lastPaymentDate: string | null;
  /** The total amount owed as of the last statement issued */
  lastStatementBalance?: number | null;
  /**
   * The date of the last statement. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  lastStatementIssueDate: string | null;
  /** The type of loan, e.g., "Consolidation Loans". */
  loanName: string | null;
  /** An object representing the status of the student loan */
  loanStatus: StudentLoanStatus;
  /**
   * The minimum payment due for the next billing cycle. There are some exceptions: Some
   * institutions require a minimum payment across all loans associated with an account number. Our
   * API presents that same minimum payment amount on each loan. The institutions that do this are:
   * Great Lakes ( `ins_116861`), Firstmark (`ins_116295`), Commonbond Firstmark Services
   * (`ins_116950`), Granite State (`ins_116308`), and Oklahoma Student Loan Authority
   * (`ins_116945`). Firstmark (`ins_116295` ) and Navient (`ins_116248`) will display as $0 if
   * there is an autopay program in effect.
   */
  minimumPaymentAmount: number | null;
  /**
   * The due date for the next payment. The due date is `null` if a payment is not expected. A
   * payment is not expected if `loan_status.type` is `deferment`, `in school`, `consolidated`,
   * `paid in full`, or `transferred`. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  nextPaymentDueDate: string | null;
  /**
   * The date on which the loan was initially lent. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  originationDate: string | null;
  /** The original principal balance of the loan. */
  originationPrincipalAmount: number | null;
  /**
   * The total dollar amount of the accrued interest balance. For Sallie Mae ( `ins_116944`), this
   * amount is included in the current balance of the loan, so this field will return as `null`.
   */
  outstandingInterestAmount: number | null;
  /**
   * The relevant account number that should be used to reference this loan for payments. In the
   * majority of cases, `payment_reference_number` will match `account_number`, but in some
   * institutions, such as Great Lakes (`ins_116861`), it will be different.
   */
  paymentReferenceNumber: string | null;
  /**
   * Information about the student's eligibility in the Public Service Loan Forgiveness program.
   * This is only returned if the institution is FedLoan (`ins_116527`). Since FedLoan no longer
   * services student loans, this field is no longer returned.
   *
   * @deprecated
   */
  pslfStatus: PslfStatus;
  /** An object representing the repayment plan for the student loan */
  repaymentPlan: StudentRepaymentPlan;
  /**
   * The sequence number of the student loan. Heartland ECSI (`ins_116948`) does not make this field
   * available.
   */
  sequenceNumber: string | null;
  /**
   * The address of the student loan servicer. This is generally the remittance address to which
   * payments should be sent.
   */
  servicerAddress: ServicerAddressData;
  /** The year to date (YTD) interest paid. Availability for this field is limited. */
  ytdInterestPaid: number | null;
  /** The year to date (YTD) principal paid. Availability for this field is limited. */
  ytdPrincipalPaid: number | null;
};

export const studentLoanSchema: Schema<StudentLoan> = s.object<StudentLoan>({
  accountId: s.nullable(s.string()),
  accountNumber: s.nullable(s.string()),
  disbursementDates: s.nullable(s.array(s.dateOnly())),
  expectedPayoffDate: s.nullable(s.dateOnly()),
  guarantor: s.nullable(s.string()),
  interestRatePercentage: s.float64(),
  isOverdue: s.nullable(s.boolean()),
  lastPaymentAmount: s.nullable(s.float64()),
  lastPaymentDate: s.nullable(s.dateOnly()),
  lastStatementBalance: s.optionalNullable(s.float64()),
  lastStatementIssueDate: s.nullable(s.dateOnly()),
  loanName: s.nullable(s.string()),
  loanStatus: studentLoanStatusSchema,
  minimumPaymentAmount: s.nullable(s.float64()),
  nextPaymentDueDate: s.nullable(s.dateOnly()),
  originationDate: s.nullable(s.dateOnly()),
  originationPrincipalAmount: s.nullable(s.float64()),
  outstandingInterestAmount: s.nullable(s.float64()),
  paymentReferenceNumber: s.nullable(s.string()),
  pslfStatus: pslfStatusSchema,
  repaymentPlan: studentRepaymentPlanSchema,
  sequenceNumber: s.nullable(s.string()),
  servicerAddress: servicerAddressDataSchema,
  ytdInterestPaid: s.nullable(s.float64()),
  ytdPrincipalPaid: s.nullable(s.float64()),
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
