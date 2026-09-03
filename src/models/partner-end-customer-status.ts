import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartnerEndCustomerStatus = {
  UnderReview: "UNDER_REVIEW",
  PendingEnablement: "PENDING_ENABLEMENT",
  Active: "ACTIVE",
  Denied: "DENIED",
  MoreInformationNeeded: "MORE_INFORMATION_NEEDED",
} as const;
export type PartnerEndCustomerStatus =
  | (typeof PartnerEndCustomerStatus)[keyof typeof PartnerEndCustomerStatus]
  | (string & {});

export const partnerEndCustomerStatusSchema: EnumSchema<PartnerEndCustomerStatus> =
  s.enumOf<PartnerEndCustomerStatus>(PartnerEndCustomerStatus);
