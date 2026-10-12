import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/sandbox/transfer/test_clock/list` */
export type SandboxTransferTestClockListRequest = {
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
   * The start virtual timestamp of test clocks to return. This should be in RFC 3339 format (i.e.
   * `2019-12-06T22:35:49Z`)
   */
  startVirtualTime?: Date | null;
  /**
   * The end virtual timestamp of test clocks to return. This should be in RFC 3339 format (i.e.
   * `2019-12-06T22:35:49Z`)
   */
  endVirtualTime?: Date | null;
  /** The maximum number of test clocks to return. @default 25 */
  count?: number | null;
  /** The number of test clocks to skip before returning results. @default 0 */
  offset?: number;
};

export const sandboxTransferTestClockListRequestSchema: Schema<SandboxTransferTestClockListRequest> =
  s.object<SandboxTransferTestClockListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startVirtualTime: s.optionalNullable(s.dateTime()),
    endVirtualTime: s.optionalNullable(s.dateTime()),
    count: s.defaulted(s.nullable(s.int()), 25),
    offset: s.defaulted(s.int(), 0),
    _keysMap: {
      clientId: "client_id",
      startVirtualTime: "start_virtual_time",
      endVirtualTime: "end_virtual_time",
    },
  });
