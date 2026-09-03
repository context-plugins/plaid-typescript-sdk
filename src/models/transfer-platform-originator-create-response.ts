import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferPlatformOriginatorCreateResponse = {
  requestId: string;
};

export const transferPlatformOriginatorCreateResponseSchema: Schema<TransferPlatformOriginatorCreateResponse> =
  s.object<TransferPlatformOriginatorCreateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
