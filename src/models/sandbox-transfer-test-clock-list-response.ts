import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferTestClockSchema, type TransferTestClock } from "./transfer-test-clock.js";

export type SandboxTransferTestClockListResponse = {
  testClocks: TransferTestClock[];
  requestId: string;
};

export const sandboxTransferTestClockListResponseSchema: Schema<SandboxTransferTestClockListResponse> =
  s.object<SandboxTransferTestClockListResponse>({
    testClocks: s.array(s.lazy(() => transferTestClockSchema)),
    requestId: s.string(),
    _keysMap: {
      testClocks: "test_clocks",
      requestId: "request_id",
    },
  });
