import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferPlatformRequirementSubmitResponse = {
  requestId: string;
};

export const transferPlatformRequirementSubmitResponseSchema: Schema<TransferPlatformRequirementSubmitResponse> =
  s.object<TransferPlatformRequirementSubmitResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
