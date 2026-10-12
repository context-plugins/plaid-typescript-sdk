import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferFailureSchema, type TransferFailure } from "./transfer-failure.js";

/** Defines the request schema for `/sandbox/transfer/refund/simulate` */
export type SandboxTransferRefundSimulateRequest = {
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
  /** Plaid's unique identifier for a refund. */
  refundId: string;
  /**
   * Plaid's unique identifier for a test clock. If provided, the event to be simulated is created
   * at the `virtual_time` on the provided `test_clock`.
   */
  testClockId?: string | null;
  /**
   * The asynchronous event to be simulated. May be: `refund.posted`, `refund.settled`,
   * `refund.failed`, or `refund.returned`.
   *
   * An error will be returned if the event type is incompatible with the current refund status.
   * Compatible status --> event type transitions include:
   *
   * `refund.pending` --> `refund.failed`
   *
   * `refund.pending` --> `refund.posted`
   *
   * `refund.posted` --> `refund.returned`
   *
   * `refund.posted` --> `refund.settled`
   *
   * `refund.posted` events can only be simulated if the refunded transfer has been transitioned to
   * settled. This mimics the ordering of events in Production.
   */
  eventType: string;
  /**
   * The failure reason if the event type for a transfer is `"failed"` or `"returned"`. Null value
   * otherwise.
   */
  failureReason?: TransferFailure | null;
  /** The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent. */
  webhook?: string;
};

export const sandboxTransferRefundSimulateRequestSchema: Schema<SandboxTransferRefundSimulateRequest> =
  s.object<SandboxTransferRefundSimulateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    refundId: s.string(),
    testClockId: s.optionalNullable(s.string()),
    eventType: s.string(),
    failureReason: s.optionalNullable(s.lazy(() => transferFailureSchema)),
    webhook: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      refundId: "refund_id",
      testClockId: "test_clock_id",
      eventType: "event_type",
      failureReason: "failure_reason",
    },
  });
