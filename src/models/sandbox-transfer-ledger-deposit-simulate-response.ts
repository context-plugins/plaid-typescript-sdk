import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferLedgerDepositSimulateResponse = {
  requestId: string;
};

export const sandboxTransferLedgerDepositSimulateResponseSchema: Schema<SandboxTransferLedgerDepositSimulateResponse> =
  s.object<SandboxTransferLedgerDepositSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
