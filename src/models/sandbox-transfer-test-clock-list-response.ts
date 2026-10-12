import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferTestClockSchema, type TransferTestClock } from "./transfer-test-clock.js";

/** Defines the response schema for `/sandbox/transfer/test_clock/list` */
export type SandboxTransferTestClockListResponse = {
  testClocks: TransferTestClock[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
