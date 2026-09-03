import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferDiligenceSubmitResponse = {
  requestId: string;
};

export const transferDiligenceSubmitResponseSchema: Schema<TransferDiligenceSubmitResponse> =
  s.object<TransferDiligenceSubmitResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
