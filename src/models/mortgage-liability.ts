import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mortgageInterestRateSchema, type MortgageInterestRate } from "./mortgage-interest-rate.js";
import { mortgagePropertyAddressSchema, type MortgagePropertyAddress } from "./mortgage-property-address.js";

export type MortgageLiability = {
  accountId: string;
  accountNumber: string | null;
  currentLateFee: number | null;
  escrowBalance: number | null;
  hasPmi: boolean | null;
  hasPrepaymentPenalty: boolean | null;
  interestRate: MortgageInterestRate;
  lastPaymentAmount: number | null;
  lastPaymentDate: string | null;
  loanTypeDescription: string | null;
  loanTerm: string | null;
  maturityDate: string | null;
  nextMonthlyPayment: number | null;
  nextPaymentDueDate: string | null;
  originationDate: string | null;
  originationPrincipalAmount: number | null;
  pastDueAmount: number | null;
  propertyAddress: MortgagePropertyAddress;
  ytdInterestPaid: number | null;
  ytdPrincipalPaid: number | null;
};

export const mortgageLiabilitySchema: Schema<MortgageLiability> = s.object<MortgageLiability>({
  accountId: s.string(),
  accountNumber: s.nullable(s.string()),
  currentLateFee: s.nullable(s.number()),
  escrowBalance: s.nullable(s.number()),
  hasPmi: s.nullable(s.boolean()),
  hasPrepaymentPenalty: s.nullable(s.boolean()),
  interestRate: mortgageInterestRateSchema,
  lastPaymentAmount: s.nullable(s.number()),
  lastPaymentDate: s.nullable(s.dateOnly()),
  loanTypeDescription: s.nullable(s.string()),
  loanTerm: s.nullable(s.string()),
  maturityDate: s.nullable(s.dateOnly()),
  nextMonthlyPayment: s.nullable(s.number()),
  nextPaymentDueDate: s.nullable(s.dateOnly()),
  originationDate: s.nullable(s.dateOnly()),
  originationPrincipalAmount: s.nullable(s.number()),
  pastDueAmount: s.nullable(s.number()),
  propertyAddress: mortgagePropertyAddressSchema,
  ytdInterestPaid: s.nullable(s.number()),
  ytdPrincipalPaid: s.nullable(s.number()),
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
