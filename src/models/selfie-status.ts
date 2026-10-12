import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An outcome status for this specific selfie. Distinct from the overall `selfie_check.status` that
 * summarizes the verification outcome from one or more selfies.
 */
export const SelfieStatus = {
  Success: "success",
  Failed: "failed",
} as const;
export type SelfieStatus = (typeof SelfieStatus)[keyof typeof SelfieStatus] | (string & {});

export const selfieStatusSchema: EnumSchema<SelfieStatus> = s.enumOf<SelfieStatus>(SelfieStatus);
