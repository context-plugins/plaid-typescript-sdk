import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferAuthorizationDecision = {
  Approved: "approved",
  Declined: "declined",
  UserActionRequired: "user_action_required",
} as const;
export type TransferAuthorizationDecision =
  | (typeof TransferAuthorizationDecision)[keyof typeof TransferAuthorizationDecision]
  | (string & {});

export const transferAuthorizationDecisionSchema: EnumSchema<TransferAuthorizationDecision> =
  s.enumOf<TransferAuthorizationDecision>(TransferAuthorizationDecision);
