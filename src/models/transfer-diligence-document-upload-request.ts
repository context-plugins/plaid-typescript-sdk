import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { purposeSchema, type Purpose } from "./purpose.js";

/** Defines the request schema for `/transfer/diligence/document/upload` */
export type TransferDiligenceDocumentUploadRequest = {
  /** The Client ID of the originator whose document that you want to upload. */
  originatorClientId: string;
  /** A file to upload. The file size must be less than 20MB. Supported file extensions: .pdf. */
  file: Uint8Array;
  /**
   * Specifies the purpose of the uploaded file.
   *
   * `"DUE_DILIGENCE"` - The transfer due diligence document of the originator.
   */
  purpose: Purpose;
};

export const transferDiligenceDocumentUploadRequestSchema: Schema<TransferDiligenceDocumentUploadRequest> =
  s.object<TransferDiligenceDocumentUploadRequest>({
    originatorClientId: s.string(),
    file: s.bytes(),
    purpose: purposeSchema,
    _keysMap: {
      originatorClientId: "originator_client_id",
    },
  });
