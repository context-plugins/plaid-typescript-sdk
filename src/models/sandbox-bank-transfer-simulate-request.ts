import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferFailureSchema, type BankTransferFailure } from "./bank-transfer-failure.js";

/** Defines the request schema for `/sandbox/bank_transfer/simulate` */
export type SandboxBankTransferSimulateRequest = {
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
  /** Plaid's unique identifier for a bank transfer. */
  bankTransferId: string;
  /**
   * The asynchronous event to be simulated. May be: `posted`, `failed`, or `reversed`.
   *
   * An error will be returned if the event type is incompatible with the current transfer status.
   * Compatible status --> event type transitions include:
   *
   * `pending` --> `failed`
   *
   * `pending` --> `posted`
   *
   * `posted` --> `reversed`
   */
  eventType: string;
  /**
   * The failure reason if the type of this transfer is `"failed"` or `"reversed"`. Null value
   * otherwise.
   */
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
