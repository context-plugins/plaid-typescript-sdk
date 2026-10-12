import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information related to the financial institution. */
export type LinkDeliveryInstitution = {
  /** The full institution name, such as 'Wells Fargo' */
  name?: string;
  /** The Plaid institution identifier */
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
