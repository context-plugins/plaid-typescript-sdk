import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simulatedTransferSweepSchema, type SimulatedTransferSweep } from "./simulated-transfer-sweep.js";

export type SandboxTransferSweepSimulateResponse = {
  sweep?: SimulatedTransferSweep | null;
  requestId: string;
};

export const sandboxTransferSweepSimulateResponseSchema: Schema<SandboxTransferSweepSimulateResponse> =
  s.object<SandboxTransferSweepSimulateResponse>({
    sweep: s.optionalNullable(s.lazy(() => simulatedTransferSweepSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
