import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/bank_transfer/sweep/get` */
export type BankTransferSweepGetRequest = {
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
  /** Identifier of the sweep. */
  sweepId: string;
};

export const bankTransferSweepGetRequestSchema: Schema<BankTransferSweepGetRequest> =
  s.object<BankTransferSweepGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    sweepId: s.string(),
    _keysMap: {
      clientId: "client_id",
      sweepId: "sweep_id",
    },
  });
