import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferDiligenceStatus = {
  NotSubmitted: "not_submitted",
  Submitted: "submitted",
  UnderReview: "under_review",
  Approved: "approved",
  Denied: "denied",
  MoreInformationRequired: "more_information_required",
} as const;
export type TransferDiligenceStatus =
  | (typeof TransferDiligenceStatus)[keyof typeof TransferDiligenceStatus]
  | (string & {});

export const transferDiligenceStatusSchema: EnumSchema<TransferDiligenceStatus> =
  s.enumOf<TransferDiligenceStatus>(TransferDiligenceStatus);
