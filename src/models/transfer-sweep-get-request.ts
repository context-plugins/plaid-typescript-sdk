import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/sweep/get` */
export type TransferSweepGetRequest = {
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
   * Plaid's unique identifier for the sweep (UUID) or a shortened form consisting of the first 8
   * characters of the identifier (8-digit hexadecimal string).
   */
  sweepId: string;
};

export const transferSweepGetRequestSchema: Schema<TransferSweepGetRequest> =
  s.object<TransferSweepGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    sweepId: s.string(),
    _keysMap: {
      clientId: "client_id",
      sweepId: "sweep_id",
    },
  });
