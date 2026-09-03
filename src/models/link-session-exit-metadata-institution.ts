import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkSessionExitMetadataInstitution = {
  name?: string;
  institutionId?: string;
};

export const linkSessionExitMetadataInstitutionSchema: Schema<LinkSessionExitMetadataInstitution> =
  s.object<LinkSessionExitMetadataInstitution>({
    name: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      institutionId: "institution_id",
    },
  });
