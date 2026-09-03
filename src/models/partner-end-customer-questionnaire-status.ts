import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartnerEndCustomerQuestionnaireStatus = {
  NotStarted: "NOT_STARTED",
  Received: "RECEIVED",
  Complete: "COMPLETE",
} as const;
export type PartnerEndCustomerQuestionnaireStatus =
  | (typeof PartnerEndCustomerQuestionnaireStatus)[keyof typeof PartnerEndCustomerQuestionnaireStatus]
  | (string & {});

export const partnerEndCustomerQuestionnaireStatusSchema: EnumSchema<PartnerEndCustomerQuestionnaireStatus> =
  s.enumOf<PartnerEndCustomerQuestionnaireStatus>(PartnerEndCustomerQuestionnaireStatus);
