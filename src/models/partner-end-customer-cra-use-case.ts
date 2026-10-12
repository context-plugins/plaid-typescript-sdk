import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A CRA use case under a permissible purpose. */
export const PartnerEndCustomerCraUseCase = {
  CreditUnderwriting: "CREDIT_UNDERWRITING",
  TenantScreening: "TENANT_SCREENING",
  InvestorOrServicerOfCredit: "INVESTOR_OR_SERVICER_OF_CREDIT",
  Utilities: "UTILITIES",
  BankAccountOpening: "BANK_ACCOUNT_OPENING",
  IdentityVerificationFraudPrevention: "IDENTITY_VERIFICATION_FRAUD_PREVENTION",
  CollectionsDebtRecovery: "COLLECTIONS_DEBT_RECOVERY",
} as const;
export type PartnerEndCustomerCraUseCase =
  | (typeof PartnerEndCustomerCraUseCase)[keyof typeof PartnerEndCustomerCraUseCase]
  | (string & {});

export const partnerEndCustomerCraUseCaseSchema: EnumSchema<PartnerEndCustomerCraUseCase> =
  s.enumOf<PartnerEndCustomerCraUseCase>(PartnerEndCustomerCraUseCase);
