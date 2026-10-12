import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The outcome status for the associated Identity Verification attempt's `verify_sms` step. This
 * field will always have the same value as `steps.verify_sms`.
 */
export const VerifySmsDetailsStatus = {
  Success: "success",
  Failed: "failed",
} as const;
export type VerifySmsDetailsStatus =
  | (typeof VerifySmsDetailsStatus)[keyof typeof VerifySmsDetailsStatus]
  | (string & {});

export const verifySmsDetailsStatusSchema: EnumSchema<VerifySmsDetailsStatus> =
  s.enumOf<VerifySmsDetailsStatus>(VerifySmsDetailsStatus);
