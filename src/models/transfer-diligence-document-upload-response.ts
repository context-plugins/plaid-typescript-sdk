import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferDiligenceDocumentUploadResponse = {
  requestId: string;
};

export const transferDiligenceDocumentUploadResponseSchema: Schema<TransferDiligenceDocumentUploadResponse> =
  s.object<TransferDiligenceDocumentUploadResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
