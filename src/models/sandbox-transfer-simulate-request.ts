import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferFailureSchema, type TransferFailure } from "./transfer-failure.js";

export type SandboxTransferSimulateRequest = {
  clientId?: string;
  secret?: string;
  transferId: string;
  testClockId?: string | null;
  eventType: string;
  failureReason?: TransferFailure | null;
  webhook?: string;
};

export const sandboxTransferSimulateRequestSchema: Schema<SandboxTransferSimulateRequest> =
  s.object<SandboxTransferSimulateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    transferId: s.string(),
    testClockId: s.optionalNullable(s.string()),
    eventType: s.string(),
    failureReason: s.optionalNullable(s.lazy(() => transferFailureSchema)),
    webhook: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      transferId: "transfer_id",
      testClockId: "test_clock_id",
      eventType: "event_type",
      failureReason: "failure_reason",
    },
  });
