import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferTestClockSchema, type TransferTestClock } from "./transfer-test-clock.js";

/** Defines the response schema for `/sandbox/transfer/test_clock/create` */
export type SandboxTransferTestClockCreateResponse = {
  /** Defines the test clock for a transfer. */
  testClock: TransferTestClock;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
