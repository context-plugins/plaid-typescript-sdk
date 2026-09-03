import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartnerEndCustomerOAuthStatusUpdatedValues = {
  NotStarted: "not-started",
  Processing: "processing",
  Approved: "approved",
  Enabled: "enabled",
  AttentionRequired: "attention-required",
} as const;
export type PartnerEndCustomerOAuthStatusUpdatedValues =
  | (typeof PartnerEndCustomerOAuthStatusUpdatedValues)[keyof typeof PartnerEndCustomerOAuthStatusUpdatedValues]
  | (string & {});

export const partnerEndCustomerOAuthStatusUpdatedValuesSchema: EnumSchema<PartnerEndCustomerOAuthStatusUpdatedValues> =
  s.enumOf<PartnerEndCustomerOAuthStatusUpdatedValues>(PartnerEndCustomerOAuthStatusUpdatedValues);
