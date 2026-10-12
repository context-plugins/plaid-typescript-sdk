import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerCraQuestionnaireSchema,
  type PartnerEndCustomerCraQuestionnaire,
} from "./partner-end-customer-cra-questionnaire.js";

/** The questionnaires for the end customer. */
export type PartnerEndCustomerQuestionnaires = {
  /** The CRA questionnaire for the end customer. */
  cra?: PartnerEndCustomerCraQuestionnaire;
};

export const partnerEndCustomerQuestionnairesSchema: Schema<PartnerEndCustomerQuestionnaires> =
  s.object<PartnerEndCustomerQuestionnaires>({
    cra: s.optional(s.lazy(() => partnerEndCustomerCraQuestionnaireSchema)),
  });
