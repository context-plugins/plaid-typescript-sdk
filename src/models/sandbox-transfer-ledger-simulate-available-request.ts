import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferLedgerSimulateAvailableRequest = {
  clientId?: string;
  secret?: string;
  ledgerId?: string | null;
  originatorClientId?: string | null;
  testClockId?: string | null;
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
