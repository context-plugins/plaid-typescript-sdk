import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferReturnRecoverResponse = {
  requestId: string;
};

export const transferReturnRecoverResponseSchema: Schema<TransferReturnRecoverResponse> =
  s.object<TransferReturnRecoverResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
