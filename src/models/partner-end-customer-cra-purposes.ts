import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerCraUseCasesSchema,
  type PartnerEndCustomerCraUseCases,
} from "./partner-end-customer-cra-use-cases.js";

/** A map of permissible purposes to their corresponding use cases. */
export type PartnerEndCustomerCraPurposes = {
  /** The list of use cases associated with a given permissible purpose. */
  writtenInstruction?: PartnerEndCustomerCraUseCases;
  /** The list of use cases associated with a given permissible purpose. */
  extensionOfCreditOrAccountReview?: PartnerEndCustomerCraUseCases;
  /** The list of use cases associated with a given permissible purpose. */
  employment?: PartnerEndCustomerCraUseCases;
  /** The list of use cases associated with a given permissible purpose. */
  insuranceUnderwriting?: PartnerEndCustomerCraUseCases;
  /** The list of use cases associated with a given permissible purpose. */
  licenseEligibility?: PartnerEndCustomerCraUseCases;
  /** The list of use cases associated with a given permissible purpose. */
  riskAssessment?: PartnerEndCustomerCraUseCases;
  /** The list of use cases associated with a given permissible purpose. */
  businessNeedTransaction?: PartnerEndCustomerCraUseCases;
  /** The list of use cases associated with a given permissible purpose. */
  businessNeedAccountReview?: PartnerEndCustomerCraUseCases;
};

export const partnerEndCustomerCraPurposesSchema: Schema<PartnerEndCustomerCraPurposes> =
  s.object<PartnerEndCustomerCraPurposes>({
    writtenInstruction: s.optional(s.lazy(() => partnerEndCustomerCraUseCasesSchema)),
    extensionOfCreditOrAccountReview: s.optional(s.lazy(() => partnerEndCustomerCraUseCasesSchema)),
    employment: s.optional(s.lazy(() => partnerEndCustomerCraUseCasesSchema)),
    insuranceUnderwriting: s.optional(s.lazy(() => partnerEndCustomerCraUseCasesSchema)),
    licenseEligibility: s.optional(s.lazy(() => partnerEndCustomerCraUseCasesSchema)),
    riskAssessment: s.optional(s.lazy(() => partnerEndCustomerCraUseCasesSchema)),
    businessNeedTransaction: s.optional(s.lazy(() => partnerEndCustomerCraUseCasesSchema)),
    businessNeedAccountReview: s.optional(s.lazy(() => partnerEndCustomerCraUseCasesSchema)),
    _keysMap: {
      writtenInstruction: "WRITTEN_INSTRUCTION",
      extensionOfCreditOrAccountReview: "EXTENSION_OF_CREDIT_OR_ACCOUNT_REVIEW",
      employment: "EMPLOYMENT",
      insuranceUnderwriting: "INSURANCE_UNDERWRITING",
      licenseEligibility: "LICENSE_ELIGIBILITY",
      riskAssessment: "RISK_ASSESSMENT",
      businessNeedTransaction: "BUSINESS_NEED_TRANSACTION",
      businessNeedAccountReview: "BUSINESS_NEED_ACCOUNT_REVIEW",
    },
  });
