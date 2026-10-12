import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/sandbox/transfer/ledger/withdraw/simulate` */
export type SandboxTransferLedgerWithdrawSimulateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxTransferLedgerWithdrawSimulateResponseSchema: Schema<SandboxTransferLedgerWithdrawSimulateResponse> =
  s.object<SandboxTransferLedgerWithdrawSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
