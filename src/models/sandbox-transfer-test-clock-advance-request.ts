import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferTestClockAdvanceRequest = {
  clientId?: string;
  secret?: string;
  testClockId: string;
  newVirtualTime: Date;
};

export const sandboxTransferTestClockAdvanceRequestSchema: Schema<SandboxTransferTestClockAdvanceRequest> =
  s.object<SandboxTransferTestClockAdvanceRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    testClockId: s.string(),
    newVirtualTime: s.dateTime(),
    _keysMap: {
      clientId: "client_id",
      testClockId: "test_clock_id",
      newVirtualTime: "new_virtual_time",
    },
  });
