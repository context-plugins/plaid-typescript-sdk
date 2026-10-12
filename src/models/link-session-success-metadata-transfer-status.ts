import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of a transfer. Returned only when [Transfer
 * UI](https://plaid.com/docs/transfer/using-transfer-ui) is implemented.
 *
 * - `COMPLETE` - The transfer was completed.
 * - `INCOMPLETE` - The transfer could not be completed. For help, see [Troubleshooting
 *   transfers](https://plaid.com/docs/transfer/using-transfer-ui/#troubleshooting-transfer-ui).
 */
export const LinkSessionSuccessMetadataTransferStatus = {
  Complete: "COMPLETE",
  Incomplete: "INCOMPLETE",
} as const;
export type LinkSessionSuccessMetadataTransferStatus =
  | (typeof LinkSessionSuccessMetadataTransferStatus)[keyof typeof LinkSessionSuccessMetadataTransferStatus]
  | (string & {});

export const linkSessionSuccessMetadataTransferStatusSchema: EnumSchema<LinkSessionSuccessMetadataTransferStatus> =
  s.enumOf<LinkSessionSuccessMetadataTransferStatus>(LinkSessionSuccessMetadataTransferStatus);
