import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tosAcceptanceMetadataSchema, type TosAcceptanceMetadata } from "./tos-acceptance-metadata.js";

export type TransferPlatformOriginatorCreateRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId: string;
  tosAcceptanceMetadata: TosAcceptanceMetadata;
  originatorReviewedAt: Date;
  webhook?: string;
};

export const transferPlatformOriginatorCreateRequestSchema: Schema<TransferPlatformOriginatorCreateRequest> =
  s.object<TransferPlatformOriginatorCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    tosAcceptanceMetadata: tosAcceptanceMetadataSchema,
    originatorReviewedAt: s.dateTime(),
    webhook: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      tosAcceptanceMetadata: "tos_acceptance_metadata",
      originatorReviewedAt: "originator_reviewed_at",
    },
  });
