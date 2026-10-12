import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issuesStatusSchema, type IssuesStatus } from "./issues-status.js";

/** Information on an issue encountered with financial institution interactions during Linking. */
export type Issue = {
  /** The unique identifier of the issue. */
  issueId?: string;
  /** A list of names of the financial institutions affected. */
  institutionNames?: string[];
  /** A list of ids of the financial institutions affected. */
  institutionIds?: string[];
  /** The creation time of the record tracking this issue. */
  createdAt?: Date;
  /** A simple summary of the error for the end user. */
  summary?: string;
  /** A more detailed description for the customer. */
  detailedDescription?: string;
  /** The current status of the issue. */
  status?: IssuesStatus;
};

export const issueSchema: Schema<Issue> = s.object<Issue>({
  issueId: s.optional(s.string()),
  institutionNames: s.optional(s.array(s.string())),
  institutionIds: s.optional(s.array(s.string())),
  createdAt: s.optional(s.dateTime()),
  summary: s.optional(s.string()),
  detailedDescription: s.optional(s.string()),
  status: s.optional(s.lazy(() => issuesStatusSchema)),
  _keysMap: {
    issueId: "issue_id",
    institutionNames: "institution_names",
    institutionIds: "institution_ids",
    createdAt: "created_at",
    detailedDescription: "detailed_description",
  },
});
