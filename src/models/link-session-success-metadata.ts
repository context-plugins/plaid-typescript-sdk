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
import {
  linkSessionSuccessMetadataTransferStatusSchema,
  type LinkSessionSuccessMetadataTransferStatus,
} from "./link-session-success-metadata-transfer-status.js";

export type LinkSessionSuccessMetadata = {
  institution?: LinkSessionSuccessMetadataInstitution | null;
  accounts?: LinkSessionSuccessMetadataAccount[];
  linkSessionId?: string;
  transferStatus?: LinkSessionSuccessMetadataTransferStatus | null;
};

export const linkSessionSuccessMetadataSchema: Schema<LinkSessionSuccessMetadata> =
  s.object<LinkSessionSuccessMetadata>({
    institution: s.optionalNullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    accounts: s.optional(s.array(s.lazy(() => linkSessionSuccessMetadataAccountSchema))),
    linkSessionId: s.optional(s.string()),
    transferStatus: s.optionalNullable(s.lazy(() => linkSessionSuccessMetadataTransferStatusSchema)),
    _keysMap: {
      linkSessionId: "link_session_id",
      transferStatus: "transfer_status",
    },
  });
