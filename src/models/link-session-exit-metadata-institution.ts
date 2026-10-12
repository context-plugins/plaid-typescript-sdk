import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An institution object. If the Item was created via Same-Day or Instant micro-deposit
 * verification, will be `null`.
 */
export type LinkSessionExitMetadataInstitution = {
  /** The full institution name, such as `Wells Fargo` */
  name?: string;
  /** The Plaid institution identifier */
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
