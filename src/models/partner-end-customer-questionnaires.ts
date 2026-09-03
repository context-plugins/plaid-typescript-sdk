import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerCraQuestionnaireSchema,
  type PartnerEndCustomerCraQuestionnaire,
} from "./partner-end-customer-cra-questionnaire.js";

export type PartnerEndCustomerQuestionnaires = {
  cra?: PartnerEndCustomerCraQuestionnaire;
};

export const partnerEndCustomerQuestionnairesSchema: Schema<PartnerEndCustomerQuestionnaires> =
  s.object<PartnerEndCustomerQuestionnaires>({
    cra: s.optional(s.lazy(() => partnerEndCustomerCraQuestionnaireSchema)),
  });
