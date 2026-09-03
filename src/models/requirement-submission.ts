import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RequirementSubmission = {
  requirementType: string;
  value: string;
  personId?: string;
};

export const requirementSubmissionSchema: Schema<RequirementSubmission> = s.object<RequirementSubmission>({
  requirementType: s.string(),
  value: s.string(),
  personId: s.optional(s.string()),
  _keysMap: {
    requirementType: "requirement_type",
    personId: "person_id",
  },
});
