import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An outcome status for this specific document submission. Distinct from the overall
 * `documentary_verification.status` that summarizes the verification outcome from one or more
 * documents.
 */
export const DocumentStatus = {
  Success: "success",
  Failed: "failed",
  ManuallyApproved: "manually_approved",
} as const;
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus] | (string & {});

export const documentStatusSchema: EnumSchema<DocumentStatus> = s.enumOf<DocumentStatus>(DocumentStatus);
