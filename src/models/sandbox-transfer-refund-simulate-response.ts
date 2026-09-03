import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferRefundSimulateResponse = {
  requestId: string;
};

export const sandboxTransferRefundSimulateResponseSchema: Schema<SandboxTransferRefundSimulateResponse> =
  s.object<SandboxTransferRefundSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
