import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxBankTransferSimulateResponse = {
  requestId: string;
};

export const sandboxBankTransferSimulateResponseSchema: Schema<SandboxBankTransferSimulateResponse> =
  s.object<SandboxBankTransferSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
