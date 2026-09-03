import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkDeliveryInstitution = {
  name?: string;
  institutionId?: string;
};

export const linkDeliveryInstitutionSchema: Schema<LinkDeliveryInstitution> =
  s.object<LinkDeliveryInstitution>({
    name: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      institutionId: "institution_id",
    },
  });
