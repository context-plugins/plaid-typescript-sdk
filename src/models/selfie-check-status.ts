import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The outcome status for the associated Identity Verification attempt's `selfie_check` step. This
 * field will always have the same value as `steps.selfie_check`.
 */
export const SelfieCheckStatus = {
  Success: "success",
  Failed: "failed",
} as const;
export type SelfieCheckStatus = (typeof SelfieCheckStatus)[keyof typeof SelfieCheckStatus] | (string & {});

export const selfieCheckStatusSchema: EnumSchema<SelfieCheckStatus> =
  s.enumOf<SelfieCheckStatus>(SelfieCheckStatus);
