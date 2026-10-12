import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mortgageInterestRateSchema, type MortgageInterestRate } from "./mortgage-interest-rate.js";
import { mortgagePropertyAddressSchema, type MortgagePropertyAddress } from "./mortgage-property-address.js";

/** Contains details about a mortgage account. */
export type MortgageLiability = {
  /** The ID of the account that this liability belongs to. */
  accountId: string;
  /** The account number of the loan. */
  accountNumber: string | null;
  /** The current outstanding amount charged for late payment. */
  currentLateFee: number | null;
  /** Total amount held in escrow to pay taxes and insurance on behalf of the borrower. */
  escrowBalance: number | null;
  /** Indicates whether the borrower has private mortgage insurance in effect. */
  hasPmi: boolean | null;
  /** Indicates whether the borrower will pay a penalty for early payoff of mortgage. */
  hasPrepaymentPenalty: boolean | null;
  /** Object containing metadata about the interest rate for the mortgage. */
  interestRate: MortgageInterestRate;
  /** The amount of the last payment. */
  lastPaymentAmount: number | null;
  /**
   * The date of the last payment. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  lastPaymentDate: string | null;
  /**
   * Description of the type of loan, for example `conventional`, `fixed`, or `variable`. This field
   * is provided directly from the loan servicer and does not have an enumerated set of possible
   * values.
   */
  loanTypeDescription: string | null;
  /** Full duration of mortgage as at origination (e.g. `10 year`). */
  loanTerm: string | null;
  /**
   * Original date on which mortgage is due in full. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  maturityDate: string | null;
  /** The amount of the next payment. */
  nextMonthlyPayment: number | null;
  /**
   * The due date for the next payment. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  nextPaymentDueDate: string | null;
  /**
   * The date on which the loan was initially lent. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  originationDate: string | null;
  /** The original principal balance of the mortgage. */
  originationPrincipalAmount: number | null;
  /** Amount of loan (principal + interest) past due for payment. */
  pastDueAmount: number | null;
  /** Object containing fields describing property address. */
  propertyAddress: MortgagePropertyAddress;
  /** The year to date (YTD) interest paid. */
  ytdInterestPaid: number | null;
  /** The YTD principal paid. */
  ytdPrincipalPaid: number | null;
};

export const mortgageLiabilitySchema: Schema<MortgageLiability> = s.object<MortgageLiability>({
  accountId: s.string(),
  accountNumber: s.nullable(s.string()),
  currentLateFee: s.nullable(s.float64()),
  escrowBalance: s.nullable(s.float64()),
  hasPmi: s.nullable(s.boolean()),
  hasPrepaymentPenalty: s.nullable(s.boolean()),
  interestRate: mortgageInterestRateSchema,
  lastPaymentAmount: s.nullable(s.float64()),
  lastPaymentDate: s.nullable(s.dateOnly()),
  loanTypeDescription: s.nullable(s.string()),
  loanTerm: s.nullable(s.string()),
  maturityDate: s.nullable(s.dateOnly()),
  nextMonthlyPayment: s.nullable(s.float64()),
  nextPaymentDueDate: s.nullable(s.dateOnly()),
  originationDate: s.nullable(s.dateOnly()),
  originationPrincipalAmount: s.nullable(s.float64()),
  pastDueAmount: s.nullable(s.float64()),
  propertyAddress: mortgagePropertyAddressSchema,
  ytdInterestPaid: s.nullable(s.float64()),
  ytdPrincipalPaid: s.nullable(s.float64()),
  _keysMap: {
    accountId: "account_id",
    accountNumber: "account_number",
    currentLateFee: "current_late_fee",
    escrowBalance: "escrow_balance",
    hasPmi: "has_pmi",
    hasPrepaymentPenalty: "has_prepayment_penalty",
    interestRate: "interest_rate",
    lastPaymentAmount: "last_payment_amount",
    lastPaymentDate: "last_payment_date",
    loanTypeDescription: "loan_type_description",
    loanTerm: "loan_term",
    maturityDate: "maturity_date",
    nextMonthlyPayment: "next_monthly_payment",
    nextPaymentDueDate: "next_payment_due_date",
    originationDate: "origination_date",
    originationPrincipalAmount: "origination_principal_amount",
    pastDueAmount: "past_due_amount",
    propertyAddress: "property_address",
    ytdInterestPaid: "ytd_interest_paid",
    ytdPrincipalPaid: "ytd_principal_paid",
  },
});
