import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/sandbox/transfer/test_clock/advance` */
export type SandboxTransferTestClockAdvanceRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * Plaid's unique identifier for a test clock. This field is only populated in the Sandbox
   * environment, and only if a `test_clock_id` was included in the `/transfer/recurring/create`
   * request. For more details, see [Simulating recurring
   * transfers](https://plaid.com/docs/transfer/sandbox/#simulating-recurring-transfers).
   */
  testClockId: string;
  /** The virtual timestamp on the test clock. This will be of the form `2006-01-02T15:04:05Z`. */
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
