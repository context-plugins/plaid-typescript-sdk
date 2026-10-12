import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/sandbox/transfer/sweep/simulate` */
export type SandboxTransferSweepSimulateRequest = {
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
   * Plaid's unique identifier for a test clock. If provided, the sweep to be simulated is created
   * on the day of the `virtual_time` on the `test_clock`. If the date of `virtual_time` is on
   * weekend or a federal holiday, the next available banking day is used.
   */
  testClockId?: string | null;
  /** The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent. */
  webhook?: string;
};

export const sandboxTransferSweepSimulateRequestSchema: Schema<SandboxTransferSweepSimulateRequest> =
  s.object<SandboxTransferSweepSimulateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    testClockId: s.optionalNullable(s.string()),
    webhook: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      testClockId: "test_clock_id",
    },
  });
