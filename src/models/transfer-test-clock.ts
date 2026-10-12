import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the test clock for a transfer. */
export type TransferTestClock = {
  /**
   * Plaid's unique identifier for a test clock. This field is only populated in the Sandbox
   * environment, and only if a `test_clock_id` was included in the `/transfer/recurring/create`
   * request. For more details, see [Simulating recurring
   * transfers](https://plaid.com/docs/transfer/sandbox/#simulating-recurring-transfers).
   */
  testClockId: string;
  /** The virtual timestamp on the test clock. This will be of the form `2006-01-02T15:04:05Z`. */
  virtualTime: Date;
};

export const transferTestClockSchema: Schema<TransferTestClock> = s.object<TransferTestClock>({
  testClockId: s.string(),
  virtualTime: s.dateTime(),
  _keysMap: {
    testClockId: "test_clock_id",
    virtualTime: "virtual_time",
  },
});
