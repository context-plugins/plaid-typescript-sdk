import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartnerEndCustomerFlowdownStatus = {
  NotStarted: "NOT_STARTED",
  InReview: "IN_REVIEW",
  Negotiation: "NEGOTIATION",
  Complete: "COMPLETE",
} as const;
export type PartnerEndCustomerFlowdownStatus =
  | (typeof PartnerEndCustomerFlowdownStatus)[keyof typeof PartnerEndCustomerFlowdownStatus]
  | (string & {});

export const partnerEndCustomerFlowdownStatusSchema: EnumSchema<PartnerEndCustomerFlowdownStatus> =
  s.enumOf<PartnerEndCustomerFlowdownStatus>(PartnerEndCustomerFlowdownStatus);
