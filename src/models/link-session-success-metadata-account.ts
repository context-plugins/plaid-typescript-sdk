import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkSessionSuccessMetadataAccount = {
  id?: string;
  name?: string;
  mask?: string | null;
  type?: string;
  subtype?: string;
  verificationStatus?: string | null;
  classType?: string | null;
};

export const linkSessionSuccessMetadataAccountSchema: Schema<LinkSessionSuccessMetadataAccount> =
  s.object<LinkSessionSuccessMetadataAccount>({
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    mask: s.optionalNullable(s.string()),
    type: s.optional(s.string()),
    subtype: s.optional(s.string()),
    verificationStatus: s.optionalNullable(s.string()),
    classType: s.optionalNullable(s.string()),
    _keysMap: {
      verificationStatus: "verification_status",
      classType: "class_type",
    },
  });
