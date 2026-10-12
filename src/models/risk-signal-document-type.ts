import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of a document for risk signal analysis */
export const RiskSignalDocumentType = {
  Unknown: "UNKNOWN",
  BankStatement: "BANK_STATEMENT",
  BenefitsStatement: "BENEFITS_STATEMENT",
  BusinessFiling: "BUSINESS_FILING",
  Check: "CHECK",
  DrivingLicense: "DRIVING_LICENSE",
  FinancialStatement: "FINANCIAL_STATEMENT",
  Invoice: "INVOICE",
  Payslip: "PAYSLIP",
  SocialSecurityCard: "SOCIAL_SECURITY_CARD",
  TaxForm: "TAX_FORM",
  UtilityBill: "UTILITY_BILL",
} as const;
export type RiskSignalDocumentType =
  | (typeof RiskSignalDocumentType)[keyof typeof RiskSignalDocumentType]
  | (string & {});

export const riskSignalDocumentTypeSchema: EnumSchema<RiskSignalDocumentType> =
  s.enumOf<RiskSignalDocumentType>(RiskSignalDocumentType);
