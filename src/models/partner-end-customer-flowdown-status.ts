import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the addendum to the Plaid MSA ("flowdown") for the end customer. */
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
