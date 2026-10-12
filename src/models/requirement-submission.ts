import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single requirement submission */
export type RequirementSubmission = {
  /**
   * The type of requirement being submitted. See [Requirement type schema
   * documentation](https://docs.google.com/document/d/1NEQkTD0sVK50iAQi6xHigrexDUxZ4QxXqSEfV_FFTiU/)
   * for a list of requirement types and possible values.
   */
  requirementType: string;
  /**
   * The value of the requirement, which can be a string or an object depending on the
   * `requirement_type`. If it is an object, the object should be JSON marshaled into a string. See
   * [Requirement type schema
   * documentation](https://docs.google.com/document/d/1NEQkTD0sVK50iAQi6xHigrexDUxZ4QxXqSEfV_FFTiU/)
   * for a list of requirement types and possible values.
   */
  value: string;
  /**
   * The `person_id` of the person the requirement submission is related to. A `person_id` is
   * returned by `/transfer/platform/person/create`. This field should not be included for
   * requirements that are not related to a person.
   */
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
