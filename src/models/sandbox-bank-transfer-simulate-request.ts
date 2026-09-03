import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferFailureSchema, type BankTransferFailure } from "./bank-transfer-failure.js";

export type SandboxBankTransferSimulateRequest = {
  clientId?: string;
  secret?: string;
  bankTransferId: string;
  eventType: string;
  failureReason?: BankTransferFailure | null;
};

export const sandboxBankTransferSimulateRequestSchema: Schema<SandboxBankTransferSimulateRequest> =
  s.object<SandboxBankTransferSimulateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    bankTransferId: s.string(),
    eventType: s.string(),
    failureReason: s.optionalNullable(s.lazy(() => bankTransferFailureSchema)),
    _keysMap: {
      clientId: "client_id",
      bankTransferId: "bank_transfer_id",
      eventType: "event_type",
      failureReason: "failure_reason",
    },
  });
