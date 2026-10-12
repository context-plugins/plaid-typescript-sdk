import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A piece of information that is required for originator onboarding. */
export type TransferPlatformRequirement = {
  /** The type of requirement. */
  requirementType?: string;
  /**
   * UUID of the person associated with the requirement. Only present for individual-scoped
   * requirements.
   */
  personId?: string | null;
};

export const transferPlatformRequirementSchema: Schema<TransferPlatformRequirement> =
  s.object<TransferPlatformRequirement>({
    requirementType: s.optional(s.string()),
    personId: s.optionalNullable(s.string()),
    _keysMap: {
      requirementType: "requirement_type",
      personId: "person_id",
    },
  });
