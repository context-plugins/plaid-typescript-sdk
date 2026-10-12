import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/sandbox/transfer/ledger/simulate_available` */
export type SandboxTransferLedgerSimulateAvailableResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxTransferLedgerSimulateAvailableResponseSchema: Schema<SandboxTransferLedgerSimulateAvailableResponse> =
  s.object<SandboxTransferLedgerSimulateAvailableResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
