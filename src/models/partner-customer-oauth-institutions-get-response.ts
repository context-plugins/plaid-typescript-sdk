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

/** Response schema for `/partner/customer/oauth_institutions/get`. */
export type PartnerCustomerOAuthInstitutionsGetResponse = {
  /** The status of the addendum to the Plaid MSA ("flowdown") for the end customer. */
  flowdownStatus?: PartnerEndCustomerFlowdownStatus;
  /** The status of the end customer's security questionnaire. */
  questionnaireStatus?: PartnerEndCustomerQuestionnaireStatus;
  /** The OAuth institutions with which the end customer's application is being registered. */
  institutions?: PartnerEndCustomerOAuthInstitution[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
