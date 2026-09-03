import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerCraPurposesSchema,
  type PartnerEndCustomerCraPurposes,
} from "./partner-end-customer-cra-purposes.js";

export type PartnerEndCustomerCraQuestionnaire = {
  purposes?: PartnerEndCustomerCraPurposes;
  isThirdPartyInvolved?: boolean;
  isTechnicalServiceProviderInvolved?: boolean;
};

export const partnerEndCustomerCraQuestionnaireSchema: Schema<PartnerEndCustomerCraQuestionnaire> =
  s.object<PartnerEndCustomerCraQuestionnaire>({
    purposes: s.optional(s.lazy(() => partnerEndCustomerCraPurposesSchema)),
    isThirdPartyInvolved: s.optional(s.boolean()),
    isTechnicalServiceProviderInvolved: s.optional(s.boolean()),
    _keysMap: {
      isThirdPartyInvolved: "is_third_party_involved",
      isTechnicalServiceProviderInvolved: "is_technical_service_provider_involved",
    },
  });
