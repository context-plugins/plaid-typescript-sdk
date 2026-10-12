import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simulatedTransferSweepSchema, type SimulatedTransferSweep } from "./simulated-transfer-sweep.js";

/** Defines the response schema for `/sandbox/transfer/sweep/simulate` */
export type SandboxTransferSweepSimulateResponse = {
  /**
   * A sweep returned from the `/sandbox/transfer/sweep/simulate` endpoint. Can be null if there are
   * no transfers to include in a sweep.
   */
  sweep?: SimulatedTransferSweep | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
