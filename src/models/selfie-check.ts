import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfieCheckSelfieSchema, type SelfieCheckSelfie } from "./selfie-check-selfie.js";
import { selfieCheckStatusSchema, type SelfieCheckStatus } from "./selfie-check-status.js";

/**
 * Additional information for the `selfie_check` step. This field will be `null` unless
 * `steps.selfie_check` has reached a terminal state of either `success` or `failed`.
 */
export type SelfieCheck = {
  /**
   * The outcome status for the associated Identity Verification attempt's `selfie_check` step. This
   * field will always have the same value as `steps.selfie_check`.
   */
  status: SelfieCheckStatus;
  /**
   * An array of selfies submitted to the `selfie_check` step. Each entry represents one user
   * submission.
   */
  selfies: SelfieCheckSelfie[];
};

export const selfieCheckSchema: Schema<SelfieCheck> = s.object<SelfieCheck>({
  status: selfieCheckStatusSchema,
  selfies: s.array(s.lazy(() => selfieCheckSelfieSchema)),
});
