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

/** Displayed once a user has successfully linked their Item. */
export type LinkSessionSuccessMetadata = {
  /**
   * An institution object. If the Item was created via Same-Day or Instant micro-deposit
   * verification, will be `null`.
   */
  institution?: LinkSessionSuccessMetadataInstitution | null;
  /**
   * A list of accounts attached to the connected Item. If Account Select is enabled via the
   * developer dashboard, `accounts` will only include selected accounts.
   */
  accounts?: LinkSessionSuccessMetadataAccount[];
  /**
   * A unique identifier associated with a user's actions and events through the Link flow. Include
   * this identifier when opening a support ticket for faster turnaround.
   */
  linkSessionId?: string;
  /**
   * The status of a transfer. Returned only when [Transfer
   * UI](https://plaid.com/docs/transfer/using-transfer-ui) is implemented.
   *
   * - `COMPLETE` - The transfer was completed.
   * - `INCOMPLETE` - The transfer could not be completed. For help, see [Troubleshooting
   *   transfers](https://plaid.com/docs/transfer/using-transfer-ui/#troubleshooting-transfer-ui).
   */
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
