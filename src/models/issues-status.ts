import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the issue. */
export const IssuesStatus = {
  Reported: "REPORTED",
  AwaitingResolution: "AWAITING_RESOLUTION",
  FixInProgress: "FIX_IN_PROGRESS",
  FixPendingValidation: "FIX_PENDING_VALIDATION",
  CannotFix: "CANNOT_FIX",
  Resolved: "RESOLVED",
} as const;
export type IssuesStatus = (typeof IssuesStatus)[keyof typeof IssuesStatus] | (string & {});

export const issuesStatusSchema: EnumSchema<IssuesStatus> = s.enumOf<IssuesStatus>(IssuesStatus);
