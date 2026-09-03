import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferRepaymentSimulateResponse = {
  requestId: string;
};

export const sandboxTransferRepaymentSimulateResponseSchema: Schema<SandboxTransferRepaymentSimulateResponse> =
  s.object<SandboxTransferRepaymentSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
