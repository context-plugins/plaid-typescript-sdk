import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/sandbox/transfer/test_clock/create` */
export type SandboxTransferTestClockCreateRequest = {
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
   * The virtual timestamp on the test clock. If not provided, the current timestamp will be used.
   * This will be of the form `2006-01-02T15:04:05Z`.
   */
  virtualTime?: Date | null;
};

export const sandboxTransferTestClockCreateRequestSchema: Schema<SandboxTransferTestClockCreateRequest> =
  s.object<SandboxTransferTestClockCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    virtualTime: s.optionalNullable(s.dateTime()),
    _keysMap: {
      clientId: "client_id",
      virtualTime: "virtual_time",
    },
  });
