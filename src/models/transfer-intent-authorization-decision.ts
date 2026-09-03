import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferIntentAuthorizationDecision = {
  Approved: "APPROVED",
  Declined: "DECLINED",
} as const;
export type TransferIntentAuthorizationDecision =
  | (typeof TransferIntentAuthorizationDecision)[keyof typeof TransferIntentAuthorizationDecision]
  | (string & {});

export const transferIntentAuthorizationDecisionSchema: EnumSchema<TransferIntentAuthorizationDecision> =
  s.enumOf<TransferIntentAuthorizationDecision>(TransferIntentAuthorizationDecision);
