import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkSessionSuccessMetadataAccountSchema,
  type LinkSessionSuccessMetadataAccount,
} from "./link-session-success-metadata-account.js";
import {
  linkSessionSuccessMetadataInstitutionSchema,
  type LinkSessionSuccessMetadataInstitution,
} from "./link-session-success-metadata-institution.js";

export type LinkSessionItemAddResult = {
  publicToken: string;
  accounts: LinkSessionSuccessMetadataAccount[];
  institution: LinkSessionSuccessMetadataInstitution | null;
};

export const linkSessionItemAddResultSchema: Schema<LinkSessionItemAddResult> =
  s.object<LinkSessionItemAddResult>({
    publicToken: s.string(),
    accounts: s.array(s.lazy(() => linkSessionSuccessMetadataAccountSchema)),
    institution: s.nullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    _keysMap: {
      publicToken: "public_token",
    },
  });
