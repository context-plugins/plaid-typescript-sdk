import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferTestClockSchema, type TransferTestClock } from "./transfer-test-clock.js";

export type SandboxTransferTestClockCreateResponse = {
  testClock: TransferTestClock;
  requestId: string;
};

export const sandboxTransferTestClockCreateResponseSchema: Schema<SandboxTransferTestClockCreateResponse> =
  s.object<SandboxTransferTestClockCreateResponse>({
    testClock: transferTestClockSchema,
    requestId: s.string(),
    _keysMap: {
      testClock: "test_clock",
      requestId: "request_id",
    },
  });
