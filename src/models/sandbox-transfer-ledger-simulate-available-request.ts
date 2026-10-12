import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/sandbox/transfer/ledger/simulate_available` */
export type SandboxTransferLedgerSimulateAvailableRequest = {
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
   * Specify which ledger balance to simulate converting pending balance to available balance. If
   * this field is left blank, this will default to the id of the default ledger balance.
   */
  ledgerId?: string | null;
  /**
   * Client ID of the end customer (i.e. the originator). Only applicable to Transfer for Platforms
   * customers.
   */
  originatorClientId?: string | null;
  /**
   * Plaid's unique identifier for a test clock. If provided, only the pending balance that is due
   * before the `virtual_time` on the test clock will be converted.
   */
  testClockId?: string | null;
  /** The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent. */
  webhook?: string;
};

export const sandboxTransferLedgerSimulateAvailableRequestSchema: Schema<SandboxTransferLedgerSimulateAvailableRequest> =
  s.object<SandboxTransferLedgerSimulateAvailableRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    testClockId: s.optionalNullable(s.string()),
    webhook: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      ledgerId: "ledger_id",
      originatorClientId: "originator_client_id",
      testClockId: "test_clock_id",
    },
  });
