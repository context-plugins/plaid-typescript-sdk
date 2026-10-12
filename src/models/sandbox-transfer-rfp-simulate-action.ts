import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The action to simulate. Must be either `approve` or `reject`.
 *
 * - `approve`: Simulates bank approval, transitioning the transfer to `settled` status
 * - `reject`: Simulates bank rejection, transitioning the transfer to `failed` status
 */
export const SandboxTransferRfpSimulateAction = {
  Approve: "approve",
  Reject: "reject",
} as const;
export type SandboxTransferRfpSimulateAction =
  | (typeof SandboxTransferRfpSimulateAction)[keyof typeof SandboxTransferRfpSimulateAction]
  | (string & {});

export const sandboxTransferRfpSimulateActionSchema: EnumSchema<SandboxTransferRfpSimulateAction> =
  s.enumOf<SandboxTransferRfpSimulateAction>(SandboxTransferRfpSimulateAction);
