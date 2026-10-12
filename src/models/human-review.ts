import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { humanReviewStatusSchema, type HumanReviewStatus } from "./human-review-status.js";

/**
 * Details about the human review check, which refers to a check that is performed by a document
 * specialist.
 */
export type HumanReview = {
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
  status: HumanReviewStatus;
};

export const humanReviewSchema: Schema<HumanReview> = s.object<HumanReview>({
  status: humanReviewStatusSchema,
});
