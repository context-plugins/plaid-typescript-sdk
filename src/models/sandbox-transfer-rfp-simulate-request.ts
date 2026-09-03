import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxTransferRfpSimulateActionSchema,
  type SandboxTransferRfpSimulateAction,
} from "./sandbox-transfer-rfp-simulate-action.js";

export type SandboxTransferRfpSimulateRequest = {
  transferId: string;
  action: SandboxTransferRfpSimulateAction;
  amount: string;
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
