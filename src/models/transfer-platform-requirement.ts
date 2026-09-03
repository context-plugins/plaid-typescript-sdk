import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferPlatformRequirement = {
  requirementType?: string;
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
