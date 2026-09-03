import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferDiligenceDocumentUploadRequest = {
  originatorClientId: string;
  file: Uint8Array;
  purpose: "DUE_DILIGENCE";
};

export const transferDiligenceDocumentUploadRequestSchema: Schema<TransferDiligenceDocumentUploadRequest> =
  s.object<TransferDiligenceDocumentUploadRequest>({
    originatorClientId: s.string(),
    file: s.bytes(),
    purpose: s.literal("DUE_DILIGENCE"),
    _keysMap: {
      originatorClientId: "originator_client_id",
    },
  });
