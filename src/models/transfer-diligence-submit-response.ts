import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/diligence/submit` */
export type TransferDiligenceSubmitResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferDiligenceSubmitResponseSchema: Schema<TransferDiligenceSubmitResponse> =
  s.object<TransferDiligenceSubmitResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
