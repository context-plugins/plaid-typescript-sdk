import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferTestClockGetRequest = {
  clientId?: string;
  secret?: string;
  testClockId: string;
};

export const sandboxTransferTestClockGetRequestSchema: Schema<SandboxTransferTestClockGetRequest> =
  s.object<SandboxTransferTestClockGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    testClockId: s.string(),
    _keysMap: {
      clientId: "client_id",
      testClockId: "test_clock_id",
    },
  });
