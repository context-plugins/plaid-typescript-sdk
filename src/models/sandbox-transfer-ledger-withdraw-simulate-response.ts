import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferLedgerWithdrawSimulateResponse = {
  requestId: string;
};

export const sandboxTransferLedgerWithdrawSimulateResponseSchema: Schema<SandboxTransferLedgerWithdrawSimulateResponse> =
  s.object<SandboxTransferLedgerWithdrawSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
