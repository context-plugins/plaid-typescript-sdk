import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the transfer is guaranteed by Plaid (Guarantee customers only). This field will
 * contain either `GUARANTEED` or `NOT_GUARANTEED` indicating whether Plaid will guarantee the
 * transfer.
 */
export const TransferAuthorizationGuaranteeDecision = {
  Guaranteed: "GUARANTEED",
  NotGuaranteed: "NOT_GUARANTEED",
} as const;
export type TransferAuthorizationGuaranteeDecision =
  | (typeof TransferAuthorizationGuaranteeDecision)[keyof typeof TransferAuthorizationGuaranteeDecision]
  | (string & {});

export const transferAuthorizationGuaranteeDecisionSchema: EnumSchema<TransferAuthorizationGuaranteeDecision> =
  s.enumOf<TransferAuthorizationGuaranteeDecision>(TransferAuthorizationGuaranteeDecision);
