import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/sandbox/transfer/ledger/deposit/simulate` */
export type SandboxTransferLedgerDepositSimulateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxTransferLedgerDepositSimulateResponseSchema: Schema<SandboxTransferLedgerDepositSimulateResponse> =
  s.object<SandboxTransferLedgerDepositSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
