import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkSessionSuccessMetadataInstitution = {
  name?: string;
  institutionId?: string;
};

export const linkSessionSuccessMetadataInstitutionSchema: Schema<LinkSessionSuccessMetadataInstitution> =
  s.object<LinkSessionSuccessMetadataInstitution>({
    name: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      institutionId: "institution_id",
    },
  });
