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

export type LinkSessionCraItemAddResult = {
  itemId: string;
  accounts: LinkSessionSuccessMetadataAccount[];
  institution: LinkSessionSuccessMetadataInstitution | null;
};

export const linkSessionCraItemAddResultSchema: Schema<LinkSessionCraItemAddResult> =
  s.object<LinkSessionCraItemAddResult>({
    itemId: s.string(),
    accounts: s.array(s.lazy(() => linkSessionSuccessMetadataAccountSchema)),
    institution: s.nullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    _keysMap: {
      itemId: "item_id",
    },
  });
