import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOriginatorDiligenceSchema,
  type TransferOriginatorDiligence,
} from "./transfer-originator-diligence.js";

/** Defines the request schema for `/transfer/diligence/submit` */
export type TransferDiligenceSubmitRequest = {
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
  /** Client ID of the originator whose diligence that you want to submit. */
  originatorClientId: string;
  /** The diligence information for the originator. */
  originatorDiligence: TransferOriginatorDiligence;
};

export const transferDiligenceSubmitRequestSchema: Schema<TransferDiligenceSubmitRequest> =
  s.object<TransferDiligenceSubmitRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    originatorDiligence: transferOriginatorDiligenceSchema,
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      originatorDiligence: "originator_diligence",
    },
  });
