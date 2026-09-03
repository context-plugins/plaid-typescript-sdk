import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferRfpSimulateResponse = {
  requestId: string;
};

export const sandboxTransferRfpSimulateResponseSchema: Schema<SandboxTransferRfpSimulateResponse> =
  s.object<SandboxTransferRfpSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
