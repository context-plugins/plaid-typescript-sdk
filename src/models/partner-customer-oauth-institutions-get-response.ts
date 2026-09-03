import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerFlowdownStatusSchema,
  type PartnerEndCustomerFlowdownStatus,
} from "./partner-end-customer-flowdown-status.js";
import {
  partnerEndCustomerOAuthInstitutionSchema,
  type PartnerEndCustomerOAuthInstitution,
} from "./partner-end-customer-oauth-institution.js";
import {
  partnerEndCustomerQuestionnaireStatusSchema,
  type PartnerEndCustomerQuestionnaireStatus,
} from "./partner-end-customer-questionnaire-status.js";

export type PartnerCustomerOAuthInstitutionsGetResponse = {
  flowdownStatus?: PartnerEndCustomerFlowdownStatus;
  questionnaireStatus?: PartnerEndCustomerQuestionnaireStatus;
  institutions?: PartnerEndCustomerOAuthInstitution[];
  requestId?: string;
};

export const partnerCustomerOAuthInstitutionsGetResponseSchema: Schema<PartnerCustomerOAuthInstitutionsGetResponse> =
  s.object<PartnerCustomerOAuthInstitutionsGetResponse>({
    flowdownStatus: s.optional(s.lazy(() => partnerEndCustomerFlowdownStatusSchema)),
    questionnaireStatus: s.optional(s.lazy(() => partnerEndCustomerQuestionnaireStatusSchema)),
    institutions: s.optional(s.array(s.lazy(() => partnerEndCustomerOAuthInstitutionSchema))),
    requestId: s.optional(s.string()),
    _keysMap: {
      flowdownStatus: "flowdown_status",
      questionnaireStatus: "questionnaire_status",
      requestId: "request_id",
    },
  });
