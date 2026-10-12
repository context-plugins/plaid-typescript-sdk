import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The outcome of the human review check, when available. The following values are possible:
 *
 *
 * `success` - The document passed the check.
 *
 * `failed` - The document failed the check.
 *
 * `no_data` - The document was submitted, but the document specialist review was not completed in
 * time.
 */
export const HumanReviewStatus = {
  Success: "success",
  Failed: "failed",
  NoData: "no_data",
} as const;
export type HumanReviewStatus = (typeof HumanReviewStatus)[keyof typeof HumanReviewStatus] | (string & {});

export const humanReviewStatusSchema: EnumSchema<HumanReviewStatus> =
  s.enumOf<HumanReviewStatus>(HumanReviewStatus);
