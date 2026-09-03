import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { humanReviewStatusSchema, type HumanReviewStatus } from "./human-review-status.js";

export type HumanReview = {
  status: HumanReviewStatus;
};

export const humanReviewSchema: Schema<HumanReview> = s.object<HumanReview>({
  status: humanReviewStatusSchema,
});
