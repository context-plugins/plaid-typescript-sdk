import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferSweepSimulateRequest = {
  clientId?: string;
  secret?: string;
  testClockId?: string | null;
  webhook?: string;
};

export const sandboxTransferSweepSimulateRequestSchema: Schema<SandboxTransferSweepSimulateRequest> =
  s.object<SandboxTransferSweepSimulateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    testClockId: s.optionalNullable(s.string()),
    webhook: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      testClockId: "test_clock_id",
    },
  });
