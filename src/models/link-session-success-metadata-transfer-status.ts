import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LinkSessionSuccessMetadataTransferStatus = {
  Complete: "COMPLETE",
  Incomplete: "INCOMPLETE",
} as const;
export type LinkSessionSuccessMetadataTransferStatus =
  | (typeof LinkSessionSuccessMetadataTransferStatus)[keyof typeof LinkSessionSuccessMetadataTransferStatus]
  | (string & {});

export const linkSessionSuccessMetadataTransferStatusSchema: EnumSchema<LinkSessionSuccessMetadataTransferStatus> =
  s.enumOf<LinkSessionSuccessMetadataTransferStatus>(LinkSessionSuccessMetadataTransferStatus);
