import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxTransferRfpSimulateActionSchema,
  type SandboxTransferRfpSimulateAction,
} from "./sandbox-transfer-rfp-simulate-action.js";

/** Defines the request schema for `/sandbox/transfer/rfp/simulate` */
export type SandboxTransferRfpSimulateRequest = {
  /** Plaid's unique identifier for a transfer. */
  transferId: string;
  /**
   * The action to simulate. Must be either `approve` or `reject`.
   *
   * - `approve`: Simulates bank approval, transitioning the transfer to `settled` status
   * - `reject`: Simulates bank rejection, transitioning the transfer to `failed` status
   */
  action: SandboxTransferRfpSimulateAction;
  /**
   * The transfer amount provided by the caller for validation purposes, must match the amount on
   * the transfer associated with the provided `transfer_id`.
   */
  amount: string;
  /**
   * The client name provided by the caller for validation purposes, must match the sender client
   * name on the transfer associated with the provided `transfer_id`.
   */
  clientName: string;
};

export const sandboxTransferRfpSimulateRequestSchema: Schema<SandboxTransferRfpSimulateRequest> =
  s.object<SandboxTransferRfpSimulateRequest>({
    transferId: s.string(),
    action: sandboxTransferRfpSimulateActionSchema,
    amount: s.string(),
    clientName: s.string(),
    _keysMap: {
      transferId: "transfer_id",
      clientName: "client_name",
    },
  });
