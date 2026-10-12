import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tosAcceptanceMetadataSchema, type TosAcceptanceMetadata } from "./tos-acceptance-metadata.js";

/** Defines the request schema for `/transfer/platform/originator/create` */
export type TransferPlatformOriginatorCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The client ID of the originator */
  originatorClientId: string;
  /** Metadata related to the acceptance of Terms of Service */
  tosAcceptanceMetadata: TosAcceptanceMetadata;
  /**
   * ISO8601 timestamp indicating the most recent time the platform collected onboarding data from
   * the originator
   */
  originatorReviewedAt: Date;
  /** The webhook URL to which a `PLATFORM_ONBOARDING_UPDATE` webhook should be sent. */
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
