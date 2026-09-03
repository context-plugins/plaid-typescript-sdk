import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HumanReviewStatus = {
  Success: "success",
  Failed: "failed",
  NoData: "no_data",
} as const;
export type HumanReviewStatus = (typeof HumanReviewStatus)[keyof typeof HumanReviewStatus] | (string & {});

export const humanReviewStatusSchema: EnumSchema<HumanReviewStatus> =
  s.enumOf<HumanReviewStatus>(HumanReviewStatus);
