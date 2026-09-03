import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SandboxTransferRfpSimulateAction = {
  Approve: "approve",
  Reject: "reject",
} as const;
export type SandboxTransferRfpSimulateAction =
  | (typeof SandboxTransferRfpSimulateAction)[keyof typeof SandboxTransferRfpSimulateAction]
  | (string & {});

export const sandboxTransferRfpSimulateActionSchema: EnumSchema<SandboxTransferRfpSimulateAction> =
  s.enumOf<SandboxTransferRfpSimulateAction>(SandboxTransferRfpSimulateAction);
