import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issuesStatusSchema, type IssuesStatus } from "./issues-status.js";

export type Issue = {
  issueId?: string;
  institutionNames?: string[];
  institutionIds?: string[];
  createdAt?: Date;
  summary?: string;
  detailedDescription?: string;
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
