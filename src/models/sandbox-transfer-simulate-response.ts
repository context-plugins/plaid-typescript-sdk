import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferSimulateResponse = {
  requestId: string;
};

export const sandboxTransferSimulateResponseSchema: Schema<SandboxTransferSimulateResponse> =
  s.object<SandboxTransferSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
