import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferTestClock = {
  testClockId: string;
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
