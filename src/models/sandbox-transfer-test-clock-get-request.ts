import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/sandbox/transfer/test_clock/get` */
export type SandboxTransferTestClockGetRequest = {
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
