import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A data scope for the products that a user can consent to in [Data Transparency
 * Messaging](https://plaid.com/docs/link/data-transparency-messaging-migration-guide)
 */
export const ConsentedDataScope = {
  AccountBalanceInfo: "account_balance_info",
  ContactInfo: "contact_info",
  AccountRoutingNumber: "account_routing_number",
  Transactions: "transactions",
  CreditLoanInfo: "credit_loan_info",
  Investments: "investments",
  PayrollInfo: "payroll_info",
  IncomeVerificationPaystubsInfo: "income_verification_paystubs_info",
  IncomeVerificationW2SInfo: "income_verification_w2s_info",
  IncomeVerificationBankStatements: "income_verification_bank_statements",
  IncomeVerificationEmploymentInfo: "income_verification_employment_info",
  BankStatements: "bank_statements",
  RiskInfo: "risk_info",
  NetworkInsightsLite: "network_insights_lite",
  FraudInfo: "fraud_info",
} as const;
export type ConsentedDataScope = (typeof ConsentedDataScope)[keyof typeof ConsentedDataScope] | (string & {});

export const consentedDataScopeSchema: EnumSchema<ConsentedDataScope> =
  s.enumOf<ConsentedDataScope>(ConsentedDataScope);
